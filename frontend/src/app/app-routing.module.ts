import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [

  { path: 'timesheet', loadChildren: () => import('./timesheet/timesheet.module').then(m => m.TimesheetModule), canActivate: [AuthGuard] },
  { path: 'mydata', loadChildren: () => import('./mydata/mydata.module').then(m => m.MydataModule), canActivate: [AuthGuard] },
  { path: 'mylearning', loadChildren: () => import('./mylearning/mylearning.module').then(m => m.MylearningModule), canActivate: [AuthGuard] },
  { path: 'myhelpline', loadChildren: () => import('./myhelpline/myhelpline.module').then(m => m.MyhelplineModule), canActivate: [AuthGuard] },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },

  { path: 'policy', loadChildren: () => import('./policy/policy.module').then(m => m.PolicyModule) },

  { path: 'finder', loadChildren: () => import('./finder/finder.module').then(m => m.FinderModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
