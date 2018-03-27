import { Component, OnInit } from '@angular/core';

import * as fromUserStore from "../../store";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-logout',
  template: `
    <button class="btn btn-primary"
      (click)="logout()">
      Logout
    </button>
  `,
  styleUrls: ['logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private store: Store<fromUserStore.UserState>) { }

  ngOnInit() {
  }

  logout() {
    console.log("test");
    this.store.dispatch(new fromUserStore.Logout());
  }
}
