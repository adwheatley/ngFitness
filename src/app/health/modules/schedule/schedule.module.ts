import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import * as fromContainers from './containers';

export const ROUTES: Routes = [
  {
    path: '',
    component: fromContainers.ScheduleComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [...fromContainers.containers]
})
export class ScheduleModule { }
