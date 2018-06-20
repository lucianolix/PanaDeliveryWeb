import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Panaderia } from '../../panaderia';
import { AgmCoreModule } from '@agm/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
@Component({
  selector: 'app-registrar-panaderia',
  templateUrl: './registrar-panaderia.component.html',
  styleUrls: ['./registrar-panaderia.component.css']
})
export class RegistrarPanaderiaComponent implements OnInit {
  model = new Panaderia('','','');

  lat: number = 10.4806;
  lng: number =-66.9036 ;
  zoom: number =16;

 

  constructor(
    private afs:AngularFirestore,
    private router: Router
  ) { }

  ngOnInit() {
   this. model = new Panaderia('hola','','');
  }

marker(event){

  this.lat=event.coords.lat
  this.lng=event.coords.lng

localStorage.setItem('lat',JSON.stringify(this.lat))
localStorage.setItem('lng',JSON.stringify(this.lng))

console.log('event',event)

}
  volver(){
    this.router.navigate(['panaderias']);
  }
  Registrar(nombre){
    console.log('nombre:',nombre)
    console.log('lat:',localStorage.getItem('lat'),'lng:',localStorage.getItem('lng'))

    var aux=this.afs.collection("Panaderias").add({
      nombre: nombre,
     latitud: localStorage.getItem('lat'),
     longitud: localStorage.getItem('lng')
      
    
  })
}
}