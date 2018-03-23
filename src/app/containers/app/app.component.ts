import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Welcome to ngFitness</h2>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  title = 'app';
}
