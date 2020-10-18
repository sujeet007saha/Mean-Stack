import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';

import { PolicyRoutingModule } from './policy-routing.module';
import { PolicyComponent } from './policy.component';
import { ViewPolicyComponent } from './view-policy/view-policy.component';


@NgModule({
  declarations: [PolicyComponent, ViewPolicyComponent],
  imports: [
    CommonModule,
    PolicyRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class PolicyModule { }
