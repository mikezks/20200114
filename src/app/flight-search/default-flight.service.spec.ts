import { TestBed } from '@angular/core/testing';

import { DefaultFlightService } from './default-flight.service';

describe('DefaultFlightService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DefaultFlightService = TestBed.get(DefaultFlightService);
    expect(service).toBeTruthy();
  });
});
