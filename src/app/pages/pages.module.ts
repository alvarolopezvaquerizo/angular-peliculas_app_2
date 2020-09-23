import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { BuscarComponent } from './buscar/buscar.component';

import { ComponentsModule } from '../components/components.module';
// Importo el PipesModule para poder utilizarlo en todas las paginas de la aplicacion
import { PipesModule } from '../pipes/pipes.module';
// Importo el RatingModule para poder utilizar las estrellas de rating
import { RatingModule } from 'ng-starrating';



@NgModule({
  declarations: [
    HomeComponent,
    PeliculaComponent,
    BuscarComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule,
    RatingModule
  ]
})
export class PagesModule { }
