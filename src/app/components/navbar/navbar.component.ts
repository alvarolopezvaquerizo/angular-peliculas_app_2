import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  // Para navegar a la busqueda que he hecho
  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  // Buscar peliculas
  buscarPelicula( texto: string ) {

    texto = texto.trim();

    // Si no hay texto no devuelve nada y si tengo mas de un caracter lo voy a buscar
    if ( texto.length === 0 ) {
      return;
    }

    this.router.navigate(['/buscar', texto]);

  }

}
