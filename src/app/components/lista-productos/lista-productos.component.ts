import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map} from 'rxjs/operators';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';

interface panaderia{
  Productos:any;
  direccion:string;
  nombre:string;
  id?:string;
}

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  panaderiasCollection:AngularFirestoreCollection<panaderia>;
  panaderias:Observable<panaderia[]> 

  
  constructor(
    private afs:AngularFirestore,
    private router: Router

  ) { }

  ngOnInit() {
var nombre=localStorage.getItem('panaderia');
console.log('nombre panaderia',nombre)

this.panaderiasCollection= this.afs.collection('Panaderias');
this.panaderias=this.panaderiasCollection.valueChanges()//observable de datos panaderias 
  }

}
