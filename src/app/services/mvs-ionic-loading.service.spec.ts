import { TestBed } from '@angular/core/testing';

import { MvsIonicLoadingService } from './mvs-ionic-loading.service';

describe('MvsIonicLoadingService', () => {
  let service: MvsIonicLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MvsIonicLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
