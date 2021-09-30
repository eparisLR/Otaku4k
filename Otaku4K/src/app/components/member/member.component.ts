import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Singer} from '../../models/singer.model';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  providers: [AppService],
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  @Input() singer: Singer | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
