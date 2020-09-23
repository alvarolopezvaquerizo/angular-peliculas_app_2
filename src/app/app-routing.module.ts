// Este modulo es las rutas de nuestra aplicacion y lo he generado desde la consola
// de esta forma: ng g m appRouting --flat que esto de --flat es para que me lo cree
// en la carpeta app
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importo el modulo de rutas y todas las rutas que va a tener nuestra aplicacion
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { BuscarComponent } from './pages/buscar/buscar.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    // Con /:id le indico que me ponga en la direccion el id de la pelicula
    path: 'pelicula/:id',
    component: PeliculaComponent
  },
  {
    // Con /:texto le indico que me ponga en la direccion el texto de la busqueda que estoy haciendo
    path: 'buscar/:texto',
    component: BuscarComponent
  },
  {
    // Con esto es si el usuario marca un url que no existe le rediriga a la pagina home
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // Añado tambien esto
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
