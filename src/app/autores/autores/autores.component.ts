import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Autor } from '../model/autor';
import { AutoresService } from './../services/autores.service';


@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {

  autores$: Observable<Autor[]>;
  displayedColumns = ['name', 'magnumOpus', 'literaryGenre'];

  // autoresService: AutoresService;

  constructor(private autoresService: AutoresService, public dialog: MatDialog) {
    // this.autoresService = new AutoresService();
    this.autores$ = this.autoresService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar autores...');
        return of([])
      })
    );

  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

ngOnInit(): void {

}

}
