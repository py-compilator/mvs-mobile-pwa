import { TestBed } from '@angular/core/testing';

import { NeighborAuthenticationService } from './neighbor-authentication-service';

describe('NeighborAuthenticationService', () => {
  let service: NeighborAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeighborAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
