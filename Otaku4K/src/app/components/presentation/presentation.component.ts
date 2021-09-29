import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  providers: [AppService],
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit, OnDestroy {
  singers: any;
  sub = new Subscription();
  constructor(private readonly appService: AppService) { }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    }

  ngOnInit(): void {
    this.sub.add(
      this.appService.getSingers().subscribe((data) => {
        this.singers = data;
        console.log(this.singers);
      })
    );
  }

}
