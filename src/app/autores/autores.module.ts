import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../shared/app-material/app-material.module';

import { AutoresRoutingModule } from './autores-routing.module';
import { AutoresComponent } from './autores/autores.component';


@NgModule({
  declarations: [
    AutoresComponent
  ],
  imports: [
    CommonModule,
    AutoresRoutingModule,
    AppMaterialModule
  ]
})
export class AutoresModule { }
