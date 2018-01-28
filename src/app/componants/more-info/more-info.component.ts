import { Component, OnInit } from '@angular/core';
import{Orphan} from '../../Orphan';
import {OrphanService} from '../../services/orphan.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import * as firebase from 'firebase';
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {

  id:string;
  orphans:Orphan;
  image:string;
 
    
  constructor(
    public orphanSer:OrphanService,
    public router:Router,
    public route:ActivatedRoute ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.orphanSer.getOrphans(this.id).subscribe(orph =>{
      this.orphans = orph;
      let strageRef = firebase.storage().ref();
      let refS = strageRef.child(this.orphans.path);
      refS.getDownloadURL().then((url)=>{
        this.image = url
      })
    });
  }
 //delete
 Delete(id){
  this.orphanSer.deteteOrphan(id);
  this.router.navigate(['/']);
}
}
