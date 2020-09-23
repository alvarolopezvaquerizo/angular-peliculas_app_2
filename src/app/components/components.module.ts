import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';

// Importo el RatingModule para poder utilizar las estrellas de rating
import { RatingModule } from 'ng-starrating';
// Importo el archivo pipes.module para utilizarlo en toda la aplicacion
import { PipesModule } from '../pipes/pipes.module';
// Importo este componente para poder utilizarlo en toda la aplicacion
import { CastSlideshowComponent } from './cast-slideshow/cast-slideshow.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    PeliculasPosterGridComponent,
    CastSlideshowComponent
  ],
  // Estos modulos los tengo que exportar para utilizarlo en toda la aplicacion
  exports: [
    NavbarComponent,
    SlideshowComponent,
    PeliculasPosterGridComponent,
    CastSlideshowComponent
  ],
  imports: [
    CommonModule,
    // Este modulo es para tener disponible mis rutas en toda la aplicacion
    RouterModule,
    RatingModule,
    PipesModule
  ]
})

export class ComponentsModule { }
