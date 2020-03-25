import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular material modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon'; 
import { MatListModule } from '@angular/material/list';
import { MatGridListModule }  from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// AngularFire Module
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { SettingsComponent } from './components/home/settings/settings.component';
import { HomeComponent } from './components/home/home.component';
import { ChooseLocationComponent } from './components/home/plan-weekend/choose-location/choose-location.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ChooseActivityComponent } from './components/home/plan-weekend/choose-activity/choose-activity.component';
import { ConfigureActivityComponent } from './components/home/plan-weekend/configure-activity/configure-activity.component';
import { PlanWeekendComponent } from './components/home/plan-weekend/plan-weekend.component';




const firebaseConfig = {
  apiKey: "AIzaSyCPJO8PfP6QLTVVsdiZWtbubc7l1icop0o",
  authDomain: "wkapp-3c0a4.firebaseapp.com",
  databaseURL: "https://wkapp-3c0a4.firebaseio.com",
  projectId: "wkapp-3c0a4",
  storageBucket: "wkapp-3c0a4.appspot.com",
  messagingSenderId: "690835929762",
  appId: "1:690835929762:web:3819daf177b8fab96bb5fb",
  measurementId: "G-QD6RLY5GK9"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    SettingsComponent,
    HomeComponent,
    ChooseLocationComponent,
    PageNotFoundComponent,
    ChooseActivityComponent,
    ConfigureActivityComponent,
    PlanWeekendComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireAuthGuardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
