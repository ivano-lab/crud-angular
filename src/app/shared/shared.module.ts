import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { LiteraryGenrePipe } from './pipes/literary-genre.pipe';


@NgModule({
  declarations: [
    ErrorDialogComponent,
    LiteraryGenrePipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [ErrorDialogComponent, LiteraryGenrePipe]
})
export class SharedModule { }
