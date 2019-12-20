import { Injectable } from '@angular/core';

import {  AngularFirestore } from '@angular/fire/firestore';
import { Venue } from '../venue.model';

@Injectable({
  providedIn: 'root'
})
export class Gitar1Service {
  [x: string]: any;

  constructor(
    private firestore: AngularFirestore
  ) {}

  create_NewMaterial(record){
    return this.firestore.collection('materi-gitar').add(record);
  }

  read_Material(){
    return this.firestore.collection('materi-gitar').snapshotChanges();
  }

  update_material(recordID, record){
    this.firestore.doc('materi-gitar/'+ recordID).update(record);
  }

  delete_material(recordId){
    this.firestore.doc('material-gitar/' + recordId ).delete();
  }
}
