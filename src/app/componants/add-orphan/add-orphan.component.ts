import { Component, OnInit } from '@angular/core';
import{Orphan} from '../../Orphan';
import {OrphanService} from '../../services/orphan.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-add-orphan',
  templateUrl: './add-orphan.component.html',
  styleUrls: ['./add-orphan.component.css']
})
export class AddOrphanComponent implements OnInit {

  orphans:Orphan={
    OFName:'',
    OSName:'',
    OLName:'',
    MFName:'',
    MSName:'',
    MLName:'',
    age:0,
    gender:'',
    height:0,
    weight:0,
    health:'',
    image:'',
    info:''
    
  };
 
  constructor(
    public orphanSer:OrphanService,
    public router:Router,
    public route:ActivatedRoute,
    public flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }


  mySubmit({value,valid}:{value:Orphan,valid:boolean}){
    if(!valid){
      this.flashMessage.show('تأكد من جميع الحقول ',{cssClass:'alert-danger',timeout:6000});
      this.router.navigate(['/add-orphan']);
    }else{
      this.orphanSer.addOrophan(value);  
      this.flashMessage.show(' تم الاضافه بنجاح  ',{cssClass:'alert-success',timeout:6000});      
      this.router.navigate(['/']);
    }
  }
}


