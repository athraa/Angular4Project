import { Injectable } from '@angular/core';
import {AngularFireDatabase,FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database-deprecated';
import {Orphan} from '../orphan';
import * as firebase from 'firebase';
import {AngularFireAuth} from 'angularfire2/auth';
import 'rxjs/add/operator/map';


@Injectable()
export class OrphanService {

  orphanList:FirebaseListObservable<any[]>;
  orphanObj:FirebaseObjectObservable<any>;
  folder:any;

  constructor(public af:AngularFireDatabase, public afAuth:AngularFireAuth) { 
    this.folder = 'orphansPhoto';
    this.orphanList = this.af.list('/orphans') as FirebaseListObservable<Orphan[]>;
  }

  getOrphan(){
    return this.orphanList;
  }

  addOrophan(orphans:Orphan){
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
    let path = `/${this.folder}/${selectedFile.name}` ;
    let iRef = storageRef.child(path);
    iRef.put(selectedFile).then((snapthot)=>{
      orphans.image = selectedFile.name;
      orphans.path = path;
      let db = firebase.database().ref('orphans');
      return db.push(orphans)
    });
    }
  }
  
  getOrphans(id:string){
    this.orphanObj = this.af.object('/orphans/'+id) as FirebaseObjectObservable<Orphan>;
    return this.orphanObj;
  }

  updateOrphans(id:string,orphans:Orphan){
    return this.orphanList.update(id,orphans);
  }


  deteteOrphan(id:string){
    return this.orphanList.remove(id);
    }


    login(email: string , password: string) {
      return new Promise((resolve, reject) => {
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
          .then(user => resolve(user),
            err => reject(err));
      });
    }
 

  logout(){
    this.afAuth.auth.signOut();
  }

  getAuth(){
    return this.afAuth.authState.map(auth=>auth);
  }

}

