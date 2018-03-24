import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="bg">
    <div class="container">
      <div class="row">
        <div class="col text-center header">
        <img src="../../../assets/ngFitnessLogo.png" height="100">
        <h1>ngFitness</h1>
        </div>
      </div>
      <router-outlet></router-outlet>
      <div class="row">
        <div class="col text-center footer">
          <small class="text-center">by Adam Wheatley</small>
        </div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  title = 'app';
}
