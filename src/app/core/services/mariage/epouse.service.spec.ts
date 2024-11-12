import { TestBed } from '@angular/core/testing';

import { EpouseService } from './epouse.service';

describe('EpouseService', () => {
  let service: EpouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
