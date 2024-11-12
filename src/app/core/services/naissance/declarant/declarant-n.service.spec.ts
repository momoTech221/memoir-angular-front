import { TestBed } from '@angular/core/testing';

import { DeclarantNService } from './declarant-n.service';

describe('DeclarantNService', () => {
  let service: DeclarantNService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeclarantNService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
