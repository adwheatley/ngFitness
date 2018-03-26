import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="bg">
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  </div>
  `,
})
export class AppComponent {
}
