import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module'
import { ReactiveFormsModule } from '@angular/forms';


import { TimesheetRoutingModule } from './timesheet-routing.module';
import { TimesheetComponent } from './timesheet.component';

@NgModule({
  declarations: [
    TimesheetComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TimesheetRoutingModule,
    ReactiveFormsModule
  ]
})
export class TimesheetModule { }
