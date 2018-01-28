import { Component, OnInit } from '@angular/core';
import{Orphan} from '../../Orphan';
import {OrphanService} from '../../services/orphan.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-edit-orphann',
  templateUrl: './edit-orphann.component.html',
  styleUrls: ['./edit-orphann.component.css']
})
export class EditOrphannComponent implements OnInit {
id:string;

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
  image:''
  
};
  constructor(
    public orphanSer:OrphanService,
    public router:Router,
    public route:ActivatedRoute ,
    public flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.orphanSer.getOrphans(this.id).subscribe(orph =>{
      this.orphans = orph;
    });
  }


  mySubmit({value,valid}:{value:Orphan,valid:boolean}){
    if(!valid){
      this.flashMessage.show('تأكد من جميع الحقول ',{cssClass:'alert-danger',timeout:6000});      
      this.router.navigate(['/edit-orphan/'+this.id]);
    }else{
      this.orphanSer.updateOrphans(this.id,value); 
      this.flashMessage.show(' تم التعديل بنجاح  ',{cssClass:'alert-success',timeout:6000});            
      this.router.navigate(['/']);
    }
  }
}
