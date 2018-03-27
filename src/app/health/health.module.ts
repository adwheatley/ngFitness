import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards';
import { AuthModule } from '../auth';

export const ROUTES: Routes = [
  {
    path: 'health',
    canActivate: [AuthGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'test' },
      { path: 'test', component: TestComponent },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AuthModule.forRoot()
  ],
  declarations: [TestComponent]
})
export class HealthModule { }
