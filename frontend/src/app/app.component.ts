import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {delay} from 'rxjs/operators';
import {LoadingService} from './service/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FICAS';
  loading: boolean = false;

  constructor(
    private router: Router,
    private _loading: LoadingService
    ) {}
  ngOnInit(): void {
    let data = localStorage.getItem('token');

    if(data == null)
    {
      this.router.navigate(["/login"]);
    }

    this.listenToLoading();
  }

  /**
   * Listen to the loadingSub property in the LoadingService class. This drives the
   * display of the loading spinner.
   */
  listenToLoading(): void {
    this._loading.loadingSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
  }


}
