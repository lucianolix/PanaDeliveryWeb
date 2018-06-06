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
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component'


// Rutas
const appRoutes: Routes = [
  // administrador

  {path: 'panaderias', component: ListaPanaderiasComponent},
{ path: 'productos', component: ListaProductosComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListaPanaderiasComponent,
    ListaProductosComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFirestoreModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
