import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map} from 'rxjs/operators';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';

interface panaderia{
  direccion:string;
  nombre:string;
  productos:object;
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
  agregar(){
    this.router.navigate(['panaderia']);
  }
  VerProductos(nombre){

    var aux=this.afs.collection("Panaderias",ref => ref.where('nombre', '==',nombre)).snapshotChanges().subscribe(data => {
      
      data.map(a=> {
       const valores=a.payload.doc.data() 
     const id=a.payload.doc.id
     const productos=a.payload.doc
     console.log('payload',a.payload)

     console.log("valores", valores)
     console.log("id de panaderia", id)
     localStorage.setItem('id',JSON.stringify(id))
     this.redireccion();
     })
         }, err => {
           console.log('Error  producto Component: ', err);
           return false;
         })
  }

  redireccion(){
    this.router.navigate(['productos']);
  }

  Modificar(nombre){
    var aux=this.afs.collection("Panaderias",ref => ref.where('nombre', '==',nombre)).snapshotChanges().subscribe(data => {
      
      data.map(a=> {
       const valores=a.payload.doc.data() 
     const id=a.payload.doc.id
     const productos=a.payload.doc
     console.log('payload',a.payload)

    
     console.log("id de panaderia", id)
     localStorage.setItem('id',JSON.stringify(id))
     localStorage.setItem('panaderia',JSON.stringify(valores))
     this.router.navigate(['modificar-panaderia']);
  
     })
         }, err => {
           console.log('Error  producto Component: ', err);
           return false;
         })
  }
}
