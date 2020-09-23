// Para instalar el slider swiper sigo la documentacion de: https://swiperjs.com/get-started/
// y en la consola pongo para instalarlo segun la documentacion npm install swiper. Despues
// nos vamos al archivo angular.json y en la parte de styles ponemos
// "node_modules/swiper/swiper-bundle.min.css" para que coja los estilos del swiper.
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
// Importo Swiper para poder utilizarlo en este modulo
import Swiper from 'swiper';
// Importo la interface
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})

export class SlideshowComponent implements OnInit, AfterViewInit {

  // Recibo del componente padre (home.component.ts) las peliculas de la cartelera
  @Input() movies: Movie[];

  public mySwiper: Swiper;

  constructor() { }

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      loop: true,
    });
  }

  ngOnInit(): void {
    console.log(this.movies);
  }

  // Ir a la siguiente slide
  onSlideNext() {
    this.mySwiper.slideNext();
  }

  // Ir a la anterior slide
  onSlidePrev() {
    this.mySwiper.slidePrev();
  }

}
