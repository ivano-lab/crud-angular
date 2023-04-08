import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'literaryGenre'
})
export class LiteraryGenrePipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'Fantasia': return 'diamond';
      case 'Ficção histórica': return 'history Edu';
    }
    return 'book';
  }

}


