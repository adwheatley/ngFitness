import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-layout',
  template: `
  <div class="row">
    <div class="col text-center header">
      <h2><img src="../../../assets/ngFitnessLogo.png">ngFitness</h2>
    </div>
  </div>
  <div class="row mb-3">
    <div class="col hide"></div>
    <div class="col left">
      <button class="btn mt-3"
        [class.active]="activeRoute === 'meals'">
        meals
      </button>
    </div>
    <div class="col">
      <button class="btn mt-3"
        [class.active]="activeRoute === 'schedule'">
        schedule
      </button>
    </div>
    <div class="col right">
      <button class="btn mt-3"
        [class.active]="activeRoute === 'workouts'">
        workouts
      </button>
    </div>
    <div class="col hide"></div>
  </div>
  <router-outlet></router-outlet>
  <div class="row">
    <div class="col"></div>
    <div class="col">
      <app-logout></app-logout>
    </div>
    <div class="col"></div>
  </div>
  `,
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  routerParams;
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  get activeRoute() {
    return this.router.url.substring(8);
  }

}
