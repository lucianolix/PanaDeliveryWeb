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
import { ModificarProductoComponent } from './components/modificar-producto/modificar-producto.component';
import { RegistrarPanaderiaComponent } from './components/registrar-panaderia/registrar-panaderia.component'
import { AgmCoreModule } from '@agm/core';
import { ModificarPanaderiaComponent } from './components/modificar-panaderia/modificar-panaderia.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

// Rutas
const appRoutes: Routes = [
  // administrador

  {path: 'panaderias', component: ListaPanaderiasComponent},
  { path: 'productos', component: ListaProductosComponent},
  { path: 'registrar', component: RegistrarProductoComponent},
  { path: 'modificar', component: ModificarProductoComponent},
  { path: 'panaderia', component: RegistrarPanaderiaComponent},
  {path:'modificar-panaderia',component:ModificarPanaderiaComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListaPanaderiasComponent,
    ListaProductosComponent,
    RegistrarProductoComponent,
    ModificarProductoComponent,
    RegistrarPanaderiaComponent,
    ModificarPanaderiaComponent,
    NavBarComponent

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFirestoreModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBrS_Ud0YiFgOLbdRcuSm9M6LYcIJznCUI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
