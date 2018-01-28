import { Component, OnInit } from '@angular/core';
import{Orphan} from '../../Orphan';
import {OrphanService} from '../../services/orphan.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    
  id :string;
  orphans:Orphan[];
  orphansCopy:Orphan[]=[];
  total=0;

  constructor(
     public orphanSer:OrphanService,
    public router:Router,
    public route:ActivatedRoute,
    public flashMessage:FlashMessagesService
  ) 
    { 
    this.orphanSer.getOrphan().subscribe(
      orphans=>{this.orphans =orphans,
      ()=>this.orphansCopy = this.orphans;
      this.totalOrphans();
      })
    
  }

  ngOnInit() {
  }
//total
  totalOrphans(){
    let sum=0;
    for(let i=0;i<this.orphans.length;i++){
      sum+=1;
    }
    this.total=sum;
  }

  //delete
  Delete(id){
    if(confirm('هل انت متأكد ؟')== true){
      this.orphanSer.deteteOrphan(id);
      this.flashMessage.show(' تم المسح بنجاح  ',{cssClass:'alert-success',timeout:6000});      
      this.router.navigate(['/']);      
    }
  }

  //filter
  filterBy(filter:string){
    switch (filter){
      case 'all':
      this.orphans = this.orphansCopy;
      break;

      case 'male':
      this.orphans = this.orphans.filter((orphanGender)=>{
        return orphanGender.gender.toLowerCase().includes('ذكر');
      });
      break;

      case 'female':
      this.orphans =this.orphans.filter(orphansFem=>{
      return orphansFem.gender.toLowerCase().includes('انثى');})
      break;

      case 'good':
      this.orphans =this.orphans.filter(good=>{
      return good.health.toLowerCase().includes('جيدة');
      });
      break;
      
      case 'notGood':
      this.orphans =this.orphans.filter(orphanNGood=>{
        return orphanNGood.health.toLowerCase().includes('غير');
      });
      break;
    }

  }
}
