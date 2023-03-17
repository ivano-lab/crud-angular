import { Component } from '@angular/core';
import { Autor } from '../model/autor';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent {

  autores: Autor[];
  displayedColumns = ['name', 'magnumOpus', 'literaryGenre'];

  constructor() {
    this.autores = [
      { _id: '1', name: 'Edgar Allan Poe', magnumOpus: 'The Crow', literaryGenre: 'Gothic Literature'}
    ];
  }

}
