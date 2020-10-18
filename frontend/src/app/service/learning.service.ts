import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Learning } from '../model/learning';
@Injectable({
  providedIn: 'root'
})
export class LearningService {

  // private httpOptions = {
  //   headers: new HttpHeaders().set("Content-type", "application/json")
  //   .set("auth-token", localStorage.getItem("token"))
  // };

  public apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.baseUrl;
   }

   getLearning(){
     return this.http.get<Learning>(`${this.apiUrl}learning`);
   }
}
