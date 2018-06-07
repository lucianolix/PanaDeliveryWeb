import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListaPanaderiasComponent } from './components/lista-panaderias/lista-panaderias.component';
import { FormsModule } from '@angular/forms';
//enviroment

import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;



// firebase

import {AngularFireModule} from 'angularfire2'
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { RegistrarProductoComponent } from './components/registrar-producto/registrar-producto.component';
import { ModificarProductoComponent } from './components/modificar-producto/modificar-producto.component'


// Rutas
const appRoutes: Routes = [
  // administrador

  {path: 'panaderias', component: ListaPanaderiasComponent},
  { path: 'productos', component: ListaProductosComponent},
  { path: 'registrar', component: RegistrarProductoComponent},
  { path: 'modificar', component: ModificarProductoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListaPanaderiasComponent,
    ListaProductosComponent,
    RegistrarProductoComponent,
    ModificarProductoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFirestoreModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
