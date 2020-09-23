import { Component, Input, OnInit } from '@angular/core';
// Importo Router para poder navegar
import { Router } from '@angular/router';
// Importo la interface de movie
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})

export class PeliculasPosterGridComponent implements OnInit {

  // Recibo del componente padre (home.component.ts) las peliculas de la cartelera
  @Input() movies: Movie[];

  constructor( private router: Router ) { }

  ngOnInit(): void {
    console.log(this.movies);
  }

  // Ver pelicula seleccionada
  onMovieClick( movie: Movie ) {
    console.log(movie);
    this.router.navigate(['/pelicula', movie.id]);
  }

}
