import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn:'root'
})

export class GitsearchService {
  private username: string;
  private client_id = '601193cd2c94bbcb4d99';
  private client_secret = '81d53a77419c2ddf48f27e306b273a60d2328092';

  constructor(private http: HttpClient) {
    console.log("service is now ready!");
    this.username = 'phelisia';
  }
  
  getProfileInfo() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.client_id + "&client_secrets=" + this.client_secret).map(res => res);
  }
  getProfileRepos() {
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.client_id + "&client_secret=" + this.client_secret).map(res => res);
  }

updateProfile(username:string){
  this.username = username;
}
}


