import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map} from 'rxjs/operators';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import {Producto} from '/Users/joseguerrero/Documents/Trimestre/Ingenieria de software/app-pana/src/app/producto'
@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.css']
})
export class RegistrarProductoComponent implements OnInit {

  model = new Producto('','','',1,'','');
  constructor(
    private afs:AngularFirestore,
    private router: Router
  ) { }

  ngOnInit() {
  }
  Registrar(nombre,descripcion,cantidad,precio,foto){


    var id=JSON.parse(localStorage.getItem('id'))
   console.log('id que llega a producto',id)

    var aux=this.afs.collection("Panaderias").doc(id).collection('Productos').add({
      nombre: nombre,
      descripcion: descripcion,
      cantidad: cantidad,
      precio: precio,
      foto: foto
  })
  this.router.navigate(['productos']);
}

  
}
