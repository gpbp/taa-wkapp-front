import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events: string[] = [];
  opened: boolean = false;
  content_title = 'Let\'s plan your weekend';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openSidenav() {
    this.opened = true;
  }

  goToDashboard() {
    this.content_title = 'Dashboard';
    this.router.navigate(['/home', {outlets: {home_outlet: ['dashboard']}}]);
  }

  goToSettings() {
    this.content_title = 'Settings';
    this.router.navigate(['/home', {outlets: {home_outlet: ['settings']}}]);
  }

  goToPlanWeekend() {
    this.content_title = 'Let\'s plan your weekend';
    this.router.navigate(['/home', {outlets: {home_outlet: ['plan-weekend']}}]);
    //this.router.navigate(['/home', {outlets: {home_outlet: null}}]);
  }

  logout() {
    console.log("hello");
  }

}
