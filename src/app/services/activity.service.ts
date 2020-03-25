import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Activity } from '../model/activity';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private activityUrl = '/api/activity/all';

  constructor(private httpClient: HttpClient) {}

  getAllActivities(): Observable<Activity[]> {
    return this.httpClient.get<Activity[]>(this.activityUrl, httpOptions)
      .pipe(
        catchError(this.handleError<Activity[]>('getAllActivities', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  

}
