import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MyhelplineRoutingModule } from './myhelpline-routing.module';
import { MyhelplineComponent } from './myhelpline.component';


@NgModule({
  declarations: [MyhelplineComponent],
  imports: [
    CommonModule,
    MyhelplineRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class MyhelplineModule { }
