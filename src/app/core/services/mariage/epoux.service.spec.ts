import { TestBed } from '@angular/core/testing';

import { EpouxService } from './epoux.service';

describe('EpouxService', () => {
  let service: EpouxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpouxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
