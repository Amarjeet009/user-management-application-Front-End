import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, LoginUser } from '../Interfaces/user.model';
import { Config } from 'src/modules/_config/config';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private http: HttpClient){ 
              
  }

  registerUser(user: User){
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return this.http.post<any>(Config.api_url+'/users/register', user, {headers}).pipe(
      map(resp => {
       return resp;
      }));
  }

  userLogin(loginUser: LoginUser){
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return this.http.post<any>(Config.api_url+'/users/authenticate', loginUser, {headers}).pipe(
      map(resp => {
         if (resp.status == true && resp.data.token) {
          localStorage.setItem('currentUser', JSON.stringify(resp.data));
          localStorage.setItem('token', resp.data.token);
      }
       return resp;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.clear();
  }
}
