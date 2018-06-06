import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListaPanaderiasComponent } from './components/lista-panaderias/lista-panaderias.component';

//enviroment

import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;



// firebase

import {AngularFireModule} from 'angularfire2'
import {AngularFirestoreModule} from 'angularfire2/firestore'


// Rutas
const appRoutes: Routes = [
  // administrador

  {path: 'panaderias', component: ListaPanaderiasComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    ListaPanaderiasComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFirestoreModule,
    RouterModule.forRoot([
      {path: 'panaderias', component: ListaPanaderiasComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
