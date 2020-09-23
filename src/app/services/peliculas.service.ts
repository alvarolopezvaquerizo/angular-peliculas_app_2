import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// Importo el Htpp para poder hacer peticiones
import { HttpClient } from '@angular/common/http';
// Importo la interface cartelera-response.ts
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';
// Importo la interface movie-response.ts
import { MovieResponse } from '../interfaces/movie-response';
// Importo la interface credit-response.ts
import { CreditsResponse, Cast } from '../interfaces/credits-response';

@Injectable({
  providedIn: 'root'
})

export class PeliculasService {

  private baseUrl: string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public cargando: boolean = false;

  constructor( private http: HttpClient ) { }

  get params() {
    return {
      api_key: 'f96c0d719c1f71494b2dff28e2fb28a3',
      language: 'es-ES',
      page: this.carteleraPage.toString()
    };
  }

  // RESETEO DE LA CARTELERA
  // Me resetea la cartelera al volver al home a la pagina 1
  resetCarteleraPage() {
    this.carteleraPage = 1;
  }

  // OBTENER LAS PELICULAS DE LA CARTELERA
  getCartelera(): Observable<Movie[]> {

    if ( this.cargando ) {
      return of([]);
    }

    this.cargando = true;

    return this.http.get<CarteleraResponse>(`${ this.baseUrl }/movie/now_playing`, {
      params: this.params
    // Ahora hago el siguiente codigo para que me vaya cargando las siguientes peliculas
    // segun vaya haciendo scroll hacia abajo
    }).pipe(
      map( (resp) => resp.results ),
      tap( () => {
        this.carteleraPage += 1;
        this.cargando = false;
      })
    );

  }

  // BUSCAR PELICULAS
  buscarPeliculas( texto: string ): Observable<Movie[]> {

    const params = { ...this.params, page: '1', query: texto };

    // https://api.themoviedb.org/3/search/movie
    return this.http.get<CarteleraResponse>(`${ this.baseUrl }/search/movie`, {
      params
    // Lo paso por la pipe y el map para transformar el objeto que me viene
    }).pipe(
      map( resp => resp.results )
    );

  }

  // OBTENER LOS DETALLES DE LA PELICULA SELECCIONADA
  getPeliculaDetalle( id: string ) {

    return this.http.get<MovieResponse>(`${ this.baseUrl }/movie/${ id }`, {
      params: this.params
      // Esto lo hago por si el usuario intenta meter una direccion erronea que no se
      // rompa la aplicacion
    }).pipe(
      catchError( err => of(null) )
    );

  }

  // OBTENER LOS ACTORES DE LA PELICULA
  getCast( id: string ): Observable<Cast[]> {

    return this.http.get<CreditsResponse>(`${ this.baseUrl }/movie/${ id }/credits`, {
      params: this.params
    }).pipe(
      map( resp => resp.cast ),
      // Esto lo hago por si el usuario intenta meter una direccion erronea que no se
      // rompa la aplicacion
      catchError( err => of([]) )
    );

  }

}
