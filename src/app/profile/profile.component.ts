import { Component, OnInit } from '@angular/core';
import {GitsearchService} from '../profile-service/gitsearch.service'
import { createOfflineCompileUrlResolver } from '@angular/compiler';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any;
  repos:any;
  username:string;

  constructor(private gitsearchService:GitsearchService) {
    // this.gitsearchService.getProfileInfo().subscribe(profile=>{
    //   console.log(profile);
    //   this.profile = profile;
    // })
    // this.gitsearchService.getProfileRepos().subscribe(repos=>{
    //   console.log(repos);
    //   this.repos=repos;

    // })
   }
   findProfile(){
   this.gitsearchService.updateProfile(this.username); 
   this.gitsearchService.getProfileInfo().subscribe(profile=>{
     console.log(profile)
     this.profile=profile;
   }) 
   this.gitsearchService.getProfileRepos().subscribe(repos=>{
     console.log(repos);
     this.repos=repos;
   })

   }
   

  ngOnInit() {
    this.gitsearchService.updateProfile('phelisia');
    this.gitsearchService.getProfileInfo().subscribe(profile=>this.profile=profile);
    this.gitsearchService.getProfileRepos().subscribe(repos=>this.repos=repos);
  }

}
