import { Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private afs:AngularFirestore) { }
  async create (collection, dato){
    return await this.afs.collection(collection).add(dato);
     }

}
