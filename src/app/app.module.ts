import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importo HttpClientModule para poder hacer peticiones http
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
// Importo el AppRoutingModule para tener disponible todas mis rutas en la aplicacion
import { AppRoutingModule } from './app-routing.module';
// Importo el ComponentsModule para disponer de cualquier componente que se encuentre definido
// en este archivo para toda mi aplicacion, por ejemplo el navbar
import { ComponentsModule } from './components/components.module';

import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
