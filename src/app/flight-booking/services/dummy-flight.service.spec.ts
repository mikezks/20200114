import { TestBed } from '@angular/core/testing';

import { DummyFlightService } from './dummy-flight.service';

describe('DummyFlightService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DummyFlightService = TestBed.get(DummyFlightService);
    expect(service).toBeTruthy();
  });
});
