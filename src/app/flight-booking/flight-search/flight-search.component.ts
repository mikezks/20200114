import { Component, OnInit, OnDestroy } from '@angular/core';
import { Flight } from '../../entities/flight';
import { FlightService } from '../services/flight.service';
import { Observable, from, zip, interval, timer, Subscription } from 'rxjs';
import { switchMap, map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: []
})
export class FlightSearchComponent implements OnInit, OnDestroy {
  from: string = 'Hamburg';
  to = 'Graz';
  get flights() {
    return this.flightService.flights;
  }
  selectedFlight: Flight;
  flight$: Observable<Flight>;
  basket: object = {
    "3": true,
    "5": true
  };
  timer$: Observable<number>;
  timerSubscription: Subscription;

  constructor(private flightService: FlightService) { 

    /* let arr = [1, 2];
    const flight = {
      id: 3,
      from: 'Graz',
      to: 'Hamburg'
    };

    const [value1, value2] = arr;
    const { id, ...rest } = flight;

    const newFlight = { ...flight, id: 8 }; */
  }

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

    this.timer$ =
      timer(0, 1000)
        .pipe(
          //take(5)
          tap(console.log)
        );

    this.timerSubscription = this.timer$.subscribe(console.log);
  }

  search(): void {
    this.flightService
      .find(this.from, this.to)
      .subscribe();
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line:no-console
    console.debug('FlightSearchComponent destroyed');
    this.timerSubscription.unsubscribe();
this.timer$  }
}
