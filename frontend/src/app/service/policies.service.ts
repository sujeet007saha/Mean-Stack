import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
import { map } from  'rxjs/operators';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { Policy } from '../model/policy';

@Injectable({
  providedIn: 'root'
})
export class PoliciesService {

  public apiUrl: string;

  constructor(private http: HttpClient ) {
      this.apiUrl = environment.baseUrl;
    }

    addPolicy(formData): Observable<any> {
      // var formData: any = new FormData();
      // formData.append("name", name);
      // formData.append("avatar", policyFIle);

      console.log(formData);

      return this.http.post<any>(`${this.apiUrl}policies/create-policy`, formData, {
        reportProgress: true,
        observe: 'events'
      })
    }

    // Error handling
    errorMgmt(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    }

    viewPolicy(){
      return this.http.get(`${this.apiUrl}policies/view-policy`)
    }
}
