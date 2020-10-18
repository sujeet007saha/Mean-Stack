import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { MydataRoutingModule } from './mydata-routing.module';
import { MydataComponent } from './mydata.component';
import { TokenInterceptorInterceptor } from '../interceptor/token-interceptor.interceptor';


@NgModule({
  declarations: [MydataComponent],
  imports: [
    CommonModule,
    MydataRoutingModule,
    MaterialModule
  ],

})
export class MydataModule { }
