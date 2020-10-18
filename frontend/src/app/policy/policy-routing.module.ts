import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolicyComponent } from './policy.component';
import { ViewPolicyComponent } from './view-policy/view-policy.component';

const routes: Routes = [
  { path: '', component: PolicyComponent },
  { path: 'view-policy', component: ViewPolicyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolicyRoutingModule { }
