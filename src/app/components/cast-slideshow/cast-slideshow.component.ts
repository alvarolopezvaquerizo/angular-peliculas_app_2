import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
// Importo swiper
import Swiper from 'swiper';
// Importo la interfaz de los actores
import { Cast } from '../../interfaces/credits-response';

@Component({
  selector: 'app-cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styleUrls: ['./cast-slideshow.component.css']
})

// Con AfterViewInit lo que hago que el swiper cuando regreso a la pagina se quede mostrando
// la primera pelicula
export class CastSlideshowComponent implements OnInit, AfterViewInit {

  // Con el input recibo del padre los actores
  @Input() cast: Cast[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.cast);
  }

  // Muestro a los actores en un swiper
  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15
    });
  }

}
