import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map} from 'rxjs/operators';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import {Producto} from '/Users/joseguerrero/Documents/Trimestre/Ingenieria de software/app-pana/src/app/producto'




@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

 
  productos:any[];
  
  constructor(
    private afs:AngularFirestore,
    private router: Router

  ) { }

  ngOnInit() {

  var arra = new Array();

   var id=JSON.parse(localStorage.getItem('id'))

  

    var aux=this.afs.collection("Panaderias").doc(id).collection('Productos').snapshotChanges().subscribe(data => {
      
 data.map(a=> {
const valores=a.payload.doc.data() 
const id=a.payload.doc.id
const productos=a.payload.doc
console.log('id es de que',id)


arra.push(new Producto(id,valores.nombre,valores.descripcion,valores.cantidad,valores.precio,valores.foto))




})
    }, err => {
      console.log('Error  producto Component: ', err);
      return false;
    })
    
this.productos=arra

}

agregar(){
  this.router.navigate(['registrar']);
}

volver(){
  this.router.navigate(['panaderias']);
}

irModificarProducto(producto){
localStorage.setItem('producto a modificar',JSON.stringify(producto))

this.router.navigate(['modificar']);
}
}
