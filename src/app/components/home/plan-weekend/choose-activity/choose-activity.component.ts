import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/model/activity';
import { ActivityService } from 'src/app/services/activity.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-choose-activity',
  templateUrl: './choose-activity.component.html',
  styleUrls: ['./choose-activity.component.css']
})
export class ChooseActivityComponent implements OnInit {
  private choosenActivity: Activity;
  private activities: Activity[];

  constructor(private activity_service: ActivityService) { }

  ngOnInit() {
    this.activity_service.getAllActivities().subscribe((activities) => this.activities = activities);
  }

  navigateToWeatherConstraint() {
    
  }
}
