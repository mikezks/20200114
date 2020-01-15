import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Flight } from '../../entities/flight';

@Injectable({
  providedIn: 'root'
})
export class DummyFlightService {

  constructor() { }

  find(from: string, to: string): Observable<Flight[]> {
    return of([
      {
        id: 999,
        from: 'Madrid',
        to: 'London',
        date: (new Date()).toISOString(),
        delayed: false
      }
    ]);
  }
}
