import { Injectable } from '@angular/core';

import { Autor } from '../model/autor';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  constructor() { }

  list(): Autor[] {
    return [
      { _id: '1', name: 'Edgar Allan Poe', magnumOpus: 'The Crow', literaryGenre: 'Gothic Literature'}
    ];
  }
}
