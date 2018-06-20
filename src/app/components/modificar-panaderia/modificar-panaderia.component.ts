import { Component, OnInit } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { Panaderia } from '../../panaderia';
@Component({
  selector: 'app-modificar-panaderia',
  templateUrl: './modificar-panaderia.component.html',
  styleUrls: ['./modificar-panaderia.component.css']
})
export class ModificarPanaderiaComponent implements OnInit {


  lat: number = 10.4806;
  lng: number =-66.9036 ;
  zoom: number =16;

  model= new Panaderia('','','')
  constructor(
    private afs:AngularFirestore,
    private router: Router
  ) { }

  ngOnInit() {
   
    
    
var panaderia=JSON.parse(localStorage.getItem('panaderia'))
console.log('panaderia', panaderia)
console.log('nombre',panaderia.nombre)
this.model.nombre=panaderia.nombre
this.lat=JSON.parse(panaderia.latitud)
this.lng=JSON.parse(panaderia.longitud)

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

  actualizar(nombre){
  var id=JSON.parse(localStorage.getItem('id'))


  var aux=this.afs.collection("Panaderias").doc(id).update({
    nombre: nombre,
    latitud: localStorage.getItem('lat'),
    longitud: localStorage.getItem('lng')
})
this.router.navigate(['panaderias']);
}


}
