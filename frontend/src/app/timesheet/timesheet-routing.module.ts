import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

import { TimesheetComponent } from './timesheet.component';
import { EffortsdataComponent } from './effortsdata/effortsdata.component';
import { AuthGuard } from '../guard/auth.guard';

const routes: Routes = [
  { path: '', component: TimesheetComponent },
  { path: 'efforts', component: EffortsdataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes), MaterialModule],
  exports: [RouterModule],
  declarations: [EffortsdataComponent]
})
export class TimesheetRoutingModule { }
