import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';
import {AppService} from '../../app.service';
import {Activity} from '../../models/activity.model';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit, OnDestroy {
  activities: Activity[] | null = [];
  sub = new Subscription();
  constructor(private appService: AppService){
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub.add(
      this.appService.getActivities().subscribe((data) => {
          this.activities = data;
      })
    );
  }

}
