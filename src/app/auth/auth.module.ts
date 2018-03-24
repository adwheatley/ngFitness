import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule, MetaReducer } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import * as fromStore from "./store";

import { AngularFireAuthModule } from "angularfire2/auth";
import { LoginComponent } from './containers/login/login.component';

import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromServices from './services';

export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', component: fromContainers.LoginComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    EffectsModule.forFeature([fromStore.UserEffects]),
    StoreModule.forFeature("auth", fromStore.reducers),
    RouterModule.forChild(ROUTES),
    ReactiveFormsModule
  ],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  providers: [...fromServices.services]
})
export class AuthModule { }
