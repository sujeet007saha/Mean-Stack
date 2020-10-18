import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Users } from '../model/users';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-mydata',
  templateUrl: './mydata.component.html',
  styleUrls: ['./mydata.component.css']
})
export class MydataComponent implements OnInit, OnDestroy {

  userDataSub$: Subscription;
  userData: Users
  constructor( private userService: UsersService ) { }

  ngOnInit(): void {
    this.userDataSub$ = this.userService.getUser().subscribe( res => {
      this.userData = res
    });
  }

  ngOnDestroy(): void{
    this.userDataSub$.unsubscribe();
  }
}
