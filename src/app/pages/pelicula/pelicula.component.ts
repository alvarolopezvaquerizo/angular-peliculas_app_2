import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
// Importo Location para poder volver a la pagina anterior al pulsar en cualquier boton de
// regresar
import { Location } from '@angular/common';

import { PeliculasService } from '../../services/peliculas.service';
import { MovieResponse } from '../../interfaces/movie-response';
import { Cast } from '../../interfaces/credits-response';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})

export class PeliculaComponent implements OnInit {

  public pelicula: MovieResponse;
  public cast: Cast[] = [];

  constructor( private activatedRoute: ActivatedRoute,
               private peliculasService: PeliculasService,
               private location: Location,
               private router: Router ) { }

  ngOnInit(): void {

    // Obtener una pelicula mediante peticion http
    const id = this.activatedRoute.snapshot.params.id;

    ////////////////////////////////////////////////////////////////////////////////////////////
    // COMBINANDO VARIOS SUBSCRIBE CON LA PROPIEDAD COMBINELATEST (ESTO ES UNA FORMA DE HACERLO)
    /////////////////////////////////////////////////////////////////////////////////////////////
    combineLatest([

      this.peliculasService.getPeliculaDetalle( id ),
      this.peliculasService.getCast( id )

    ]).subscribe( ( [pelicula, cast] ) => {

      // Si la pelicula no existe me redirige al Home
      if ( !pelicula ) {
        this.router.navigateByUrl('/home');
        return;
      }

      // Obtengo la pelicula y sus actores y con .filter( actor => actor.profile_path !== null )
      // hago que me devuelva un nuevo arreglo sin que me devuelva los actores que no tengan
      // fotografia
      this.pelicula = pelicula;
      this.cast = cast.filter( actor => actor.profile_path !== null );

    });
    /////////////////////////////////////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////////////////////////////////////
    // FORMA DE HACERLO HABITUALMENTE PERO ESTA FORMA TIENE MAS CODIGO Y MENOS EFICIENCIA
    /////////////////////////////////////////////////////////////////////////////////////////////
    //this.peliculasService.getPeliculaDetalle( id ).subscribe( movie => {
      // Si la pelicula no existe me redirige al Home
      //if ( !movie ) {
        //this.router.navigateByUrl('/home');
        //return;
      //}
      //this.pelicula = movie;
    //});

    // Obtener los actores de la pelicula mediante peticion http
    //this.peliculasService.getCast( id ).subscribe( cast => {
      //console.log(cast);
      // Con .filter( actor => actor.profile_path !== null ) hago que me devuelva
      // un nuevo arreglo sin que me devuelva los actores que no tengan fotografia
      //this.cast = cast.filter( actor => actor.profile_path !== null );
    //});
    /////////////////////////////////////////////////////////////////////////////////////////////
  }

  // Regresar a la pagina anterior
  onRegresar() {

    this.location.back();

  }

}
