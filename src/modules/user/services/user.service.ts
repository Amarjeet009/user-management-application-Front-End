import { Injectable } from '@angular/core';
import { Config } from 'src/modules/_config/config';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private localStorage: LocalStorage) { }
  getCurrentUserData(){
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<any>(Config.api_url+'/users/current', {headers})
    // .pipe(map(respData => {
    //   return respData;
    // }));
  }


}
