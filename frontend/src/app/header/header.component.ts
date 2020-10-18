import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private userName$: Subscription;
  private userName = "";
  constructor(public userService: UsersService) {}

  ngOnInit(): void {
    this.userName$ = this.userService.getUser().subscribe( res => {
      this.userName = `${res.firstname} ${res.lastname}`
    });
  }

  ngOnDestroy(): void {
    this.userName$.unsubscribe();
  }
}
