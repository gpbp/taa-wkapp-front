import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan-weekend',
  templateUrl: './plan-weekend.component.html',
  styleUrls: ['./plan-weekend.component.css']
})
export class PlanWeekendComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
