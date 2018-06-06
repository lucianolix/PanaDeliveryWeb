import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map} from 'rxjs/operators';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';

interface panaderia{
  direccion:string;
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
  panaderias:Observable<panaderia[]> 

  constructor(
    private afs:AngularFirestore,
    private router: Router

  ) { }

  ngOnInit() {
    this.panaderiasCollection= this.afs.collection('Panaderias')//referencia
    this.panaderias=this.panaderiasCollection.valueChanges()//observable de datos panaderias 
  }

}
