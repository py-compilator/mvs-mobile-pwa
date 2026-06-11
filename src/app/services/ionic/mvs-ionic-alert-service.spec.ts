import { TestBed } from '@angular/core/testing';

import { MvsIonicAlertService } from './mvs-ionic-alert-service';

describe('MvsIonicAlertService', () => {
  let service: MvsIonicAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MvsIonicAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
