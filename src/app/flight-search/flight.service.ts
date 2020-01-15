import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { Flight } from '../entities/flight';
import { DefaultFlightService } from './default-flight.service';
import { DummyFlightService } from './dummy-flight.service';

@Injectable({
  providedIn: 'root',
  /* useClass: DefaultFlightService,
  deps: [HttpClient] */
  useClass: DummyFlightService
})
export abstract class FlightService {
  abstract find(from: string, to: string): Observable<Flight[]>;
}
