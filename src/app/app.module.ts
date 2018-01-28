import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes,CanActivate} from '@angular/router';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database-deprecated';
import {OrphanService} from './services/orphan.service';
import {FlashMessagesModule, FlashMessagesService} from 'angular2-flash-messages';
import {AngularFireAuth} from 'angularfire2/auth';
import {AuthGuard} from './guard/auth.guard';


import { AppComponent } from './app.component';
import { EditOrphannComponent } from './componants/edit-orphann/edit-orphann.component';
import { DashboardComponent } from './componants/dashboard/dashboard.component';
import { MoreInfoComponent } from './componants/more-info/more-info.component';
import { AddOrphanComponent } from './componants/add-orphan/add-orphan.component';
import { LoginComponent } from './componants/login/login.component';
import { NavbarComponent } from './componants/navbar/navbar.component';


const appRoute:Routes=[
  {path:'' , component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'add-orphan' ,component:AddOrphanComponent,canActivate:[AuthGuard]},
  {path:'edit-orphan/:id', component:EditOrphannComponent,canActivate:[AuthGuard]},
  {path:'more-info/:id' , component:MoreInfoComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent}
];

const config = {
  
    apiKey: "AIzaSyBvh4sonh63WT9hZKEipNtuFCqGI8B0ets",
    authDomain: "orphandbmanagement.firebaseapp.com",
    databaseURL: "https://orphandbmanagement.firebaseio.com",
    projectId: "orphandbmanagement",
    storageBucket: "orphandbmanagement.appspot.com",
    messagingSenderId: "83925814297"
  
};

@NgModule({
  declarations: [
    AppComponent,
    EditOrphannComponent,
    DashboardComponent,
    MoreInfoComponent,
    AddOrphanComponent,
    LoginComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    FlashMessagesModule
    
  ],
  providers: [OrphanService,FlashMessagesService,AngularFireAuth,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
