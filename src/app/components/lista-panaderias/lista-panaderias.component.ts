import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
// creation and utility methods
import { Observable, Subject, pipe } from 'rxjs';
// operators all come from `rxjs/operators`
import { map, takeUntil, tap } from 'rxjs/operators';

interface panaderia{
  direccion:string;
  Productos:any;
  nombre:string;
  id?:string;
}
@Component({
  selector: 'app-lista-panaderias',
  templateUrl: './lista-panaderias.component.html',
  styleUrls: ['./lista-panaderias.component.css']
})
export class ListaPanaderiasComponent implements OnInit {

  panaderiasCollection:AngularFirestoreCollection<panaderia>;
  panaderias:any; 

  constructor(
    private afs:AngularFirestore,
    private router: Router

  ) { }

  ngOnInit() {

    this.panaderiasCollection= this.afs.collection('Panaderias')//referencia
    this.panaderias=this.panaderiasCollection.snapshotChanges()
    .map(actions=>{
      return actions.map(a=>{
        console.log('que es estooo aca',a)
        const data=a.payload.doc.data() as panaderia;
         
      })
    })
     
console.log('que llego aca',this.panaderias)
    
  }
  
  VerProductos(nombre){

    localStorage.setItem('panaderia',nombre)
    this.router.navigate(['productos']);

  }

}
