import { TestBed } from '@angular/core/testing';

import { PereNService } from './pere-n.service';

describe('PereNService', () => {
  let service: PereNService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PereNService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
