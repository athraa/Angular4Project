import { Injectable } from '@angular/core';
import {Router,CanActivate} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthGuard implements CanActivate{

  constructor(public router:Router,public afAuth:AngularFireAuth){}




  canActivate(): Observable<boolean>{
    return this.afAuth.authState.map((auth)=>{
      if(!auth){
        this.router.navigate(['/login']);
        return false;
      
      }else{
        return true;
      }
    });
  }
}





