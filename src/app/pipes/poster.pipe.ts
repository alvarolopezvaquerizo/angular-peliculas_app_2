import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})

export class PosterPipe implements PipeTransform {

  transform( poster: string ): string {

    // Si el poster existe entonces retorno el poster y si no existe retorno la imagen de no image
    if ( poster ) {
      return `https://image.tmdb.org/t/p/w500${ poster }`;
    } else {
      return './assets/no-image.jpg';
    }

  }

}
