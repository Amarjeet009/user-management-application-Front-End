import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { Config } from '../../_config/config';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }


  homeArrData() : Observable<any[]>{
    let homeResponse = this.http.get(Config.myjson_url + '/19yq0w');
    let subHomeResponse = this.http.get(Config.myjson_url + '/13po68');
    let trendreResponse = this.http.get(Config.myjson_url+'/mgbcg')
     return forkJoin([homeResponse, subHomeResponse, trendreResponse]);
    }

    userFeedbackAndPost(): Observable<any[]> {
      let userResponse = this.http.get(Config.user_url + '/users');
      let postResponse = this.http.get(Config.user_url + '/posts');
      return forkJoin([userResponse, postResponse]);
    }

    // getCountry(): Observable<any[]> {

    // }
    getCountry(){
     return this.http.get(Config.api_url+'/getCountry/country');
    }
}
