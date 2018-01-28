import { Component, OnInit } from '@angular/core';
import {OrphanService} from '../../services/orphan.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email:string;
  password:string;

  constructor(
    public orphanSer:OrphanService,
    public router:Router,
    public flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }

  Login(){
    this.orphanSer.login(this.email,this.password).then((res)=>{
    this.flashMessage.show('تم التسجيل بنجاح ',{cssClass:'alert-success',timeout:6000});
    this.router.navigate(['/']);
    }).catch((err)=>{
    this.flashMessage.show('يوجد خطأ في الايميل او الرقم السري',{cssClass:'alert-danger',timeout:6000});
    this.router.navigate(['/login']);
    })
  }
  
}
