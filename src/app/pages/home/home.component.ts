import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

// Importo el servicio peliculas.service.ts
import { PeliculasService } from '../../services/peliculas.service';
// Importo la interfaz
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {

  public movies: Movie[] = [];
  public moviesSlideshow: Movie[] = [];

  // El HostListener va a estar escuchando algo, en este caso cada vez que se haga
  // scroll en la ventana se va a cargar mas peliculas
  @HostListener('window:scroll', ['$event'])
  onScroll() {

    // Posicion actual del scroll
    const pos = ( document.documentElement.scrollTop || document.body.scrollTop ) + 1300;
    // Posicion maxima del scroll
    const max = ( document.documentElement.scrollHeight || document.body.scrollHeight );

    if ( pos > max ) {

      if ( this.peliculasService.cargando ) {
        return;
      }

      this.peliculasService.getCartelera().subscribe( movies => {
        this.movies.push(...movies);
      });
    }

  }


  constructor( private peliculasService: PeliculasService ) { }

  ngOnInit(): void {

    // Obtengo las peliculas de cartelera
    this.peliculasService.getCartelera()
      .subscribe( movies => {
        this.movies = movies;
        this.moviesSlideshow = movies;
      });

  }

  // Reseteo de la cartelera
  ngOnDestroy() {
    this.peliculasService.resetCarteleraPage();
  }

}
