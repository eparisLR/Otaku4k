import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {AppService} from '../../app.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Fan} from '../../models/fan.model';


@Component({
  selector: 'app-fans',
  templateUrl: './fans.component.html',
  styleUrls: ['./fans.component.scss']
})

export class FansComponent implements OnInit, OnDestroy {
  fans: Fan[] = [];
  dataSource: any;
  sub = new Subscription();
  displayedColumns: string[] = ['nom', 'prenom', 'ville', 'pays'];
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  form = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    ville: new FormControl('', Validators.required),
    pays: new FormControl('', Validators.required),
  });

  constructor(private appService: AppService) {
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
        this.receiveFans();
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

          this.form.controls.nom.setValue('');
          this.form.controls.prenom.setValue('');
          this.form.controls.ville.setValue('');
          this.form.controls.pays.setValue('');
      })
    );
  }
}


