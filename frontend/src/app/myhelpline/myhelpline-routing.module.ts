import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';

import { MyhelplineComponent } from './myhelpline.component';

const routes: Routes = [{ path: '', component: MyhelplineComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyhelplineRoutingModule { }
