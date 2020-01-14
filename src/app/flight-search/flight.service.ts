import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { Flight } from '../entities/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }

  find(from: string, to: string): Observable<Flight[]> {
    const url = 'http://www.angular.at/api/flight';

    const params = new HttpParams()
      .set('from', from)
      .set('to', to);

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http
      .get<Flight[]>(url, { params, headers });
    /* return of([
      {
        id: 999,
        from: 'Madrid',
        to: 'London',
        date: (new Date()).toISOString(),
        delayed: false
      }
    ]); */
  }
}
