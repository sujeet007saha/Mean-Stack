import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from, Subscription } from 'rxjs';
import { UsersService } from '../service/users.service';
import { HeaderComponent } from '../header/header.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  login$: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private router: Router,
    private headercomponent: HeaderComponent
    ) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.router.navigate(['/']);
    }
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      password: [null, Validators.required]
    });
  }

  submit() {
    if(this.loginForm.valid){
      this.login$ = this.userService.login(this.loginForm.value).subscribe(res => {
        console.log(res);
        localStorage.clear();
        localStorage.setItem("token", res.token);
        localStorage.setItem("userId", res.userId);
        this.router.navigate(["/"]);
        this.headercomponent.ngOnInit();
        //window.location.reload();
      },
      err => {
        console.log(err);
      });;
    }
    setTimeout(() => {
      this.loginForm.reset();
    }, 2000);

  }

  ngOnDestroy(): void {
    if(this.login$){
      this.login$.unsubscribe();
    }
  }

}
