import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {Subscription} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Singer} from '../../models/singer.model';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit, OnDestroy {
  singers: Singer[] = [];
  sub = new Subscription();
  constructor(private appService: AppService) { }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    }

  ngOnInit(): void {
    this.sub.add(
      this.appService.getSingers().subscribe((data) => {
          this.singers = data;
      })
    );
  }

}
