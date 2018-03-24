import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromModules from './modules';
import * as fromContainers from './containers';
import * as fromAuth from "./auth";

// routes
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' }
];

@NgModule({
  declarations: [
    fromContainers.containers
  ],
  imports: [
    BrowserModule,
    fromModules.modules,
    RouterModule.forRoot(ROUTES),
    fromAuth.AuthModule
  ],
  providers: [],
  bootstrap: [fromContainers.AppComponent]
})
export class AppModule { }
