import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Plat } from '../models/Plats';
import { DataSnapshot } from '@angular/fire/database/interfaces';
import * as firebase from 'firebase'
@Injectable({
  providedIn: 'root'
})

export class PlatsServiceService {

  plats: Plat[] = [];
  platsSubject = new Subject<Plat[]>();

  constructor() {
    this.getPlats();
   }

  emitPlats() {
    this.platsSubject.next(this.plats);
  }

  savePlats() {
    firebase.database().ref('/N7s5F8eIhkSWNbcOxSlUG0HtC643/Plats').set(this.plats);
  }

  getPlats() {
    firebase.database().ref('/N7s5F8eIhkSWNbcOxSlUG0HtC643/Plats')
    .on('value',(data: DataSnapshot) => {
      this.plats = data.val() ? data.val() : [];
      this.emitPlats();
    });
  }

  getSinglePlat(id : number) {
    return new Promise((resolve, reject) => {
      firebase.database().ref('N7s5F8eIhkSWNbcOxSlUG0HtC643/Plats/'+id).once('value').then(
        (data: DataSnapshot) => {
          resolve(data.val());
        }, (error) => {
          reject(error);
        }
      );
    });
  }

}
