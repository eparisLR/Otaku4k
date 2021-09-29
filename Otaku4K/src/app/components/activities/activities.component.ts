import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';
import {AppService} from '../app.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  providers: [AppService, MatSnackBar],
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit, OnDestroy {
  activities: any;
  sub = new Subscription();
  constructor(private appService: AppService, private snackBar: MatSnackBar){
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub.add(
      this.appService.getActivities().subscribe((data) => {
        if (typeof data === 'string'){
          this.snackBar.open(data, 'Ok');
        } else {
          this.activities = data;
        }
      })
    );
  }

}
