import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FlightSearchComponent } from './flight-search.component';
import { SharedModule } from '../../shared/shared.module';
import { FlightBookingModule } from '../flight-booking.module';
import { CoreModule } from 'src/app/core/core.module';
import { FlightService } from '../services/flight.service';

describe('Unit test: flight-search.component', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        CoreModule,
        FlightBookingModule,
        SharedModule
      ],
      providers: [
        // Add Providers if you need them for your tests
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should not have any flights loaded initially', () => { 
    expect(component.flights.length).toBe(0);
  });
});