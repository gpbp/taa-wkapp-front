import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
// Angular authentication guard
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { SettingsComponent } from './components/home/settings/settings.component';
import { HomeComponent } from './components/home/home.component';
import { ChooseLocationComponent } from './components/home/plan-weekend/choose-location/choose-location.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PlanWeekendComponent } from './components/home/plan-weekend/plan-weekend.component';
import { ChooseActivityComponent } from './components/home/plan-weekend/choose-activity/choose-activity.component';
import { ConfigureActivityComponent } from './components/home/plan-weekend/configure-activity/configure-activity.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'home', component: HomeComponent, children: [
    {path: 'dashboard', component: DashboardComponent, outlet: 'home_outlet'},
    {path: 'settings', component: SettingsComponent, outlet: 'home_outlet'},
    {path: '', redirectTo: '/home/(home_outlet:dashboard)', pathMatch: 'full'},
    {path: 'plan-weekend', component: PlanWeekendComponent, outlet: 'home_outlet', children: [
      {path: 'choose-location', component: ChooseLocationComponent, outlet: 'plan_weekend_outlet'},
      
      {path: '', redirectTo: '/home/(home_outlet:plan-weekend)/(plan_weekend_outlet:choose-location)', pathMatch: 'full'},
      
    ]}
  ]},
  {path: 'configure-activity', component: ConfigureActivityComponent},
  
  {path: 'choose-activity', component: ChooseActivityComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
