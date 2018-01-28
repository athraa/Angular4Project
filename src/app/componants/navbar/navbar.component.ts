import { Component, OnInit } from '@angular/core';
import {OrphanService} from '../../services/orphan.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogin:boolean;
  
  constructor(public orphanSer:OrphanService,public router:Router) {
    this.orphanSer.getAuth().subscribe(auth=>{
      if(auth){
        this.isLogin = true;
      }else{
        this.isLogin = false;
      }
    });
   }

  ngOnInit() {
    
  }

  logout(){
    this.orphanSer.logout();
    this.router.navigate(['login']);
  }
}
