import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  providers: [AppService],
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit, OnDestroy {
  singers: any;
  singer: any;
  name: any;
  sub = new Subscription();

  constructor(private readonly appService: AppService, private activatedRoute: ActivatedRoute) { }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.name = this.activatedRoute.snapshot.paramMap.get('name');
    this.sub.add(
      this.appService.getSingers().subscribe((data) => {
        this.singers = data;
        this.singer = this.singers.find((s: { nom: any; }) => s.nom = this.name);
      })
    );
  }

}
