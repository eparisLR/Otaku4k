import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class AppService {

  singersUrl = 'http://localhost:3000/artistes';
  fanUrl = 'http://localhost:3000/fans';
  activitiesUrl = 'http://localhost:3000/activtes';
  constructor(private http: HttpClient) { }

  getSingers(): Observable<JSON | string> {
    return this.http.get<JSON | string>(this.singersUrl).pipe(
      catchError(err => of('Une erreur est survenue lors de la récupération des chanteurs.')
    ));
  }

  getFans(): Observable<JSON>{
    return this.http.get<JSON>(this.fanUrl);
  }

  getActivities(): Observable<JSON>{
    return this.http.get<JSON>(this.activitiesUrl);
  }

  addFan(fan: JSON): Observable<any>{
    return this.http.post(this.fanUrl, fan);
  }


}
