import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, first, delay } from 'rxjs/operators';

import { Autor } from '../model/autor';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  private readonly API = '/assets/autores.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Autor[]>(this.API)
    .pipe(
      first(),
      delay(1000),
      tap(autores => console.log(autores))
    );
  }
}
