import { MatGridListModule } from '@angular/material/grid-list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { MatButtonModule } from '@angular/material/button';

const materialImports = [
  MatButtonModule,
  MatGridListModule
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    materialImports,
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
