import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Users } from '../model/users';
import { Timesheet } from '../model/timesheet';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // private httpOptions = {
  //   headers: new HttpHeaders().set("Content-type", "application/json")
  //   .set("auth-token", localStorage.getItem("token"))
  // };
  public apiUrl: string;

  constructor( private http: HttpClient, private router: Router ) {
    this.apiUrl = environment.baseUrl;
  }

  getUser(){
    const userId = localStorage.getItem('userId');
    return this.http.get<Users>(`${this.apiUrl}user/${userId}`);
  }

  login(user){

    return this.http.post<any>(`${this.apiUrl}user/login`, user)

  }

  // getToken(){
  //   return localStorage.getItem('token');
  // }

  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    this.router.navigate(["/login"]);
  }

  isLoggedIn(){
    return !! localStorage.getItem("token");
  }

  //sdhudhu
  //getting the timesheet
  postTime(timedata){
    const userId = localStorage.getItem('userId');
    return this.http.post<any>(`${this.apiUrl}user/timesheet/${userId}`, timedata)
  }

  getTime() {
    const userId = localStorage.getItem("userId");
    return this.http.get<Timesheet>(`${this.apiUrl}user/timesheet/${userId}`);
  }
}
