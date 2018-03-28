import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards';
import { AuthModule } from '../auth';

import * as fromComponents from './components';

export const ROUTES: Routes = [
  {
    path: 'health',
    component: fromComponents.LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'schedule'},
      { path: 'schedule', loadChildren: './modules/schedule/schedule.module#ScheduleModule'},
      { path: 'meals', loadChildren: './modules/meals/meals.module#MealsModule'},
      { path: 'workouts', loadChildren: './modules/workouts/workouts.module#WorkoutsModule'}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AuthModule.forRoot(),
  ],
  declarations: [...fromComponents.components]
})
export class HealthModule { }
