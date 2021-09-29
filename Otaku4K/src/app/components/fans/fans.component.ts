import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {AppService} from '../app.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-fans',
  templateUrl: './fans.component.html',
  providers: [AppService],
  styleUrls: ['./fans.component.scss']
})

export class FansComponent implements OnInit, OnDestroy {
  fan: any;
  fans: any;
  dataSource: any;
  sub = new Subscription();
  displayedColumns: string[] = ['nom', 'prenom', 'ville', 'pays'];
  C = new MatSort();
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  form = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    ville: new FormControl('', Validators.required),
    pays: new FormControl('', Validators.required),
  });

  constructor(private readonly appService: AppService) {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.receiveFans();
  }

  addFan(): void {
    this.sub.add(
      this.appService.addFan(this.form.value).subscribe(() => {
        alert('Fan ajouté : ' + this.form.value.nom);
        // recuperation list
      })
    );
  }
  receiveFans(): void{
    this.sub.add(
      this.appService.getFans().subscribe((data) => {
        this.fans = data;
        this.dataSource = new MatTableDataSource(this.fans);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      })
    );
  }
}


