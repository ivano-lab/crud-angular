import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { AutoresRoutingModule } from './autores-routing.module';
import { AutoresComponent } from './autores/autores.component';


@NgModule({
  declarations: [
    AutoresComponent
  ],
  imports: [
    CommonModule,
    AutoresRoutingModule,
    MatTableModule
  ]
})
export class AutoresModule { }
