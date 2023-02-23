import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getSocialMedia(){
    return this.http.post(`${environment.apiUrl}/get-social-media`,null).pipe(map((response: any)=> response))
  }

  getStats(){
    return this.http.post(`${environment.apiUrl}/get-stats`,null).pipe(map((response: any)=> response))
  }

  getCards(){
    return this.http.post(`${environment.apiUrl}/get-intro-cards`,null).pipe(map((response: any)=> response))
  }

  getInfoData(title){
    let req = {
      title: title
    }
    return this.http.post(`${environment.apiUrl}/get-info-data`,req).pipe(map((response: any)=> response))
  }
}
