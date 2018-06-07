import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map} from 'rxjs/operators';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import {Producto} from '/Users/joseguerrero/Documents/Trimestre/Ingenieria de software/app-pana/src/app/producto'
@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.css']
})
export class ModificarProductoComponent implements OnInit {

  model = new Producto('','','',1,'','');
  constructor(
    private afs:AngularFirestore,
    private router: Router

  ) { }

  ngOnInit() {

    var data= JSON.parse(localStorage.getItem('producto a modificar'))

    console.log('json tiene esto',data)
    this.model.cantidad=data.cantidad
    this.model.nombre=data.nombre
    this.model.descripcion=data.descripcion
    this.model.foto=data.foto
    this.model.precio=data.precio

  }

  Modificar(nombre,descripcion,cantidad,precio,foto){




    




    var id=JSON.parse(localStorage.getItem('id'))
    var data= JSON.parse(localStorage.getItem('producto a modificar'))
    var idproducto=data.id

    var aux=this.afs.collection("Panaderias").doc(id).collection('Productos').doc(idproducto
    ).update({
      nombre: nombre,
      descripcion: descripcion,
      cantidad: cantidad,
      precio: precio,
      foto: foto
  })
  this.router.navigate(['productos']);
  }
  volver(){
    this.router.navigate(['productos']);
  }
}
