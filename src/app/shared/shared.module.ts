import { HeaderComponent } from './components/header/header.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

const materialImports = [
  MatButtonModule,
  MatGridListModule
];

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    materialImports,
    CommonModule,
  ]
})

export class HomeModule { }
