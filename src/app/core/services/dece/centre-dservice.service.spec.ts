import { TestBed } from '@angular/core/testing';

import { CentreDServiceService } from './centre-dservice.service';

describe('CentreDServiceService', () => {
  let service: CentreDServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentreDServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
