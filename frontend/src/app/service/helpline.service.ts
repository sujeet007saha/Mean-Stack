import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelplineService {

  public apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.baseUrl;
   }

  logHelp(issue, user){
    return this.http.post(`${this.apiUrl}helpline`, [issue, user]);
  }
}
