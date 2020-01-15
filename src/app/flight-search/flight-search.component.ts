import { Component, OnInit } from '@angular/core';
import { Flight } from '../entities/flight';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { FlightService } from './flight.service';
import { Observable, from, zip, interval } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  from = 'Hamburg';
  to = 'Graz';
  flights: Flight[] = [];
  selectedFlight: Flight;
  flight$: Observable<Flight>;

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.flight$ =
      this.flightService
        .find(this.from, this.to)
        .pipe(
          switchMap(flights =>
            zip(
              from(flights),
              interval(1000)
            )
          ),
          map(([flight, _]) => flight)
        );
  }

  search(): void {
    this.flightService
      .find(this.from, this.to)
      .subscribe(
        flights => this.flights = flights,
        err => console.error('Error on loading flights', err)
      );
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }
}
