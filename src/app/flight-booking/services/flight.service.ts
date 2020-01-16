import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../../entities/flight';
import { DummyFlightService } from './dummy-flight.service';
import { DefaultFlightService } from './default-flight.service';

@Injectable({
  providedIn: 'root',
  useClass: DefaultFlightService,
  deps: [HttpClient]
  //useClass: DummyFlightService
})
export abstract class FlightService {
  flights: Flight[];
  abstract find(from: string, to: string): Observable<Flight[]>;
}
