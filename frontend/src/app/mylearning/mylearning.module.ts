import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { MylearningRoutingModule } from './mylearning-routing.module';
import { MylearningComponent } from './mylearning.component';
import { UsersService } from '../service/users.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorInterceptor } from '../interceptor/token-interceptor.interceptor';


@NgModule({
  declarations: [MylearningComponent],
  imports: [
    CommonModule,
    MylearningRoutingModule,
    MaterialModule
  ],
  providers: [UsersService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorInterceptor, multi: true }
  ]
})
export class MylearningModule { }
