import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoadingService} from '../service/loading.service';
import { catchError, map } from 'rxjs/operators';


@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

  constructor(private _loading: LoadingService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (localStorage.getItem('token') != null) {
      const token = localStorage.getItem('token');
      // if the token is  stored in localstorage add it to http header
      const headers = new HttpHeaders().set("Content-type", "application/json").set("auth-token", token);
      //clone http to the custom AuthRequest and send it to the server
      const AuthRequest = request.clone({ headers: headers });
      this._loading.setLoading(true, request.url);
      return next.handle(AuthRequest)
      .pipe(catchError((err) => {
        this._loading.setLoading(false, request.url);
        return err;
      }))
      .pipe(map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
        if (evt instanceof HttpResponse) {
          this._loading.setLoading(false, request.url);
        }
        return evt;
      }));
    }
    else{
      return next.handle(request);
    }
  }
}
