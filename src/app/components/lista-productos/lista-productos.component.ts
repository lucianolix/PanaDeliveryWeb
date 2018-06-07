import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map} from 'rxjs/operators';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import {Producto} from '/Users/joseguerrero/Documents/Trimestre/Ingenieria de software/app-pana/src/app/producto'


interface producto{
  
  cantidad:number,
  foto:string,
  nombre:string

}

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

 
  producto:any[];
  
  constructor(
    private afs:AngularFirestore,
    private router: Router

  ) { }

  ngOnInit() {
   var id=JSON.parse(localStorage.getItem('id'))
   console.log('id que llega a producto',id)

    var aux=this.afs.collection("Panaderias").doc(id).collection('Productos').snapshotChanges().subscribe(data => {
      
 data.map(a=> {
const valores=a.payload.doc.data() 
const id=a.payload.doc.id
const productos=a.payload.doc

console.log("valores de productos", valores)


})
    }, err => {
      console.log('Error  producto Component: ', err);
      return false;
    })
    


}

agregar(){
  this.router.navigate(['registrar']);
}

}
