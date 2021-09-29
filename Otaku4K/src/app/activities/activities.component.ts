import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';
import {AppService} from '../app.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  providers: [AppService],
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  activities: any;
  sub = new Subscription();
  constructor(private readonly appService: AppService){
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
