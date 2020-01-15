import { Component, OnInit, OnDestroy } from '@angular/core';
import { Flight } from '../../entities/flight';
import { FlightService } from '../services/flight.service';
import { Observable, from, zip, interval } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit, OnDestroy {
  from = 'Hamburg';
  to = 'Graz';
  get flights() {
    return this.flightService.flights;
  }
  selectedFlight: Flight;
  flight$: Observable<Flight>;

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    // tslint:disable-next-line:no-console
    console.debug('FlightSearchComponent created');

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
        undefined,
        err => console.error('Error on loading flights', err)
      );
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line:no-console
    console.debug('FlightSearchComponent destroyed');
  }
}
