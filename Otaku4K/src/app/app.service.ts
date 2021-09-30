import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Activity} from './models/activity.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Fan} from './models/fan.model';
import {Singer} from './models/singer.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  singersUrl = 'http://localhost:3000/artistes';
  fanUrl = 'http://localhost:3000/fans';
  activitiesUrl = 'http://localhost:3000/activtes';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
  }

  getSingers(): Observable<Singer[]> {
    return this.http.get<Singer[]>(this.singersUrl).pipe(
      catchError(err => {
          this.snackBar.open('Une erreur est survenue lors de la récupération des chanteurs.', 'Ok');
          console.error('Une erreur est survenue lors de la récupération des fans.');
          return [];
        }
      ));
  }

  getFans(): Observable<Fan[]> {
    return this.http.get<Fan[]>(this.fanUrl).pipe(
      catchError(err => {
          this.snackBar.open('Une erreur est survenue lors de la récupération des fans.', 'Ok');
          console.error('Une erreur est survenue lors de la récupération des fans.');
          return [];
        }
      ));
  }

  getActivities(): Observable<Activity[] | null> {
    return this.http.get<Activity[]>(this.activitiesUrl).pipe(
      catchError(err => {
          this.snackBar.open('Une erreur est survenue lors de la récupération des chanteurs.', 'Ok');
          console.error('Une erreur est survenue lors de la récupération des fans.');
          return [];
        }
      ));
  }

  addFan(fan: Fan): Observable<any> {
    return this.http.post(this.fanUrl, fan).pipe(
      catchError(err => {
          this.snackBar.open(`Le fan n'a pas pu être ajouté`, 'Ok');
          return [];
        }
      ));
  }


}
