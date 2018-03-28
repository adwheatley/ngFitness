import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import * as fromContainers from './containers';

const ROUTES: Routes = [
  {
    path: '',
    component: fromContainers.MealsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [...fromContainers.containers]
})
export class MealsModule { }
