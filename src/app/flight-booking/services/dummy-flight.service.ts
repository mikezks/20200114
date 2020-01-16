import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Flight } from '../../entities/flight';
import { FlightService } from './flight.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DummyFlightService implements FlightService {
  flights: Flight[] = [];

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
    ])
      .pipe(
        tap(flights => this.flights = flights)
      );
  }
}
