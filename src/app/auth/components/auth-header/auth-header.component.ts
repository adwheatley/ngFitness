import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-header',
  template: `
  <div class="row">
    <div class="col text-center header">
      <img src="../../../assets/ngFitnessLogo.png" height="100">
      <h1>ngFitness</h1>
    </div>
  </div>
  `,
  styleUrls: ['./auth-header.component.scss']
})
export class AuthHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
