import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule ,
  MatSelectModule
} from '@angular/material';


@NgModule({
  imports: [
      CommonModule,
      MatButtonModule,
      MatToolbarModule,
      MatInputModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatSelectModule],
  exports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
