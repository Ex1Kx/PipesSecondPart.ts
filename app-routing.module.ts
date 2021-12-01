import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RopaComponent } from './ropa/ropa.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { CarroComponent } from './carro/carro.component';
const routes: Routes = [
  {
    path: 'ropa',
    component: RopaComponent,
  },
  {
    path: 'articulos',
    component: ArticulosComponent,
  },
  {
    path: 'formcarro',
    component: CarroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
