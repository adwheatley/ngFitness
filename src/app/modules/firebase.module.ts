import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  exports: [
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  declarations: [],
  providers: [],
  bootstrap: []
})
export class FirebaseModule {}
