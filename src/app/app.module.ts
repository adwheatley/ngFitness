import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromModules from './modules';
import * as fromContainers from './containers';

// routes
export const ROUTES: Routes = [];

@NgModule({
  declarations: [
    fromContainers.containers
  ],
  imports: [
    BrowserModule,
    fromModules.modules,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [fromContainers.AppComponent]
})
export class AppModule { }
