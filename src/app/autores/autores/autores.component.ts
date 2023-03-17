import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { Autor } from '../model/autor';
import { AutoresService } from './../services/autores.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent {

  autores: Autor[] = [
    { _id: '1', name: 'Edgar Allan Poe', magnumOpus: 'The Crow', literaryGenre: 'Gothic Literature'}
  ];
  displayedColumns = ['name', 'magnumOpus', 'literaryGenre'];

  // autoresService: AutoresService;

  constructor(private autoresService: AutoresService) {
    // this.autoresService = new AutoresService();
    this.autores = this.autoresService.list();
  }

}
