import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromModules from './modules';
import * as fromContainers from './containers';
import * as fromAuth from "./auth";
import { HealthModule } from './health/health.module';

// routes
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule'}
];

@NgModule({
  declarations: [
    fromContainers.containers
  ],
  imports: [
    BrowserModule,
    fromModules.modules,
    RouterModule.forRoot(ROUTES),
    fromAuth.AuthModule,
    HealthModule
  ],
  providers: [],
  bootstrap: [fromContainers.AppComponent]
})
export class AppModule { }
