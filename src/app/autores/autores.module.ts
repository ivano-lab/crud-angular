import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoresRoutingModule } from './autores-routing.module';
import { AutoresComponent } from './autores/autores.component';


@NgModule({
  declarations: [
    AutoresComponent
  ],
  imports: [
    CommonModule,
    AutoresRoutingModule
  ]
})
export class AutoresModule { }
