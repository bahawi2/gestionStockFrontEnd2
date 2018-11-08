import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/finally';
import { CookieService } from 'ngx-cookie-service';
import { API_URLS } from './config/api.url.export';
//,import { Store } from '@ngrx/store';

@Injectable()
export class AppService {


  authenticated: boolean = false;

  constructor(private http: HttpClient,
    //private cookieService: CookieService
    ) { }
  authenticate(credentials, callback) {
    if(credentials){
      const token = btoa(credentials.username + ':' + credentials.password);
     // this.cookieService.set('token', token);
      const headers = new HttpHeaders({ authorization: 'Basic ' + token });
      this.http.get(API_URLS.USERS_URL,{headers:headers}).subscribe(response => {
      //this.http.get(API_URLS.USERS_URL).subscribe(response => {
          if (response && response['name']) {
            console.log("user "+response['name']);
            this.authenticated = true;

          } else {
              this.authenticated = false;
          }
          return callback && callback();
      });
    }
    else {
      this.authenticated = false;
    }
  }

  logout(callback){
    return callback && callback();
  }
}
