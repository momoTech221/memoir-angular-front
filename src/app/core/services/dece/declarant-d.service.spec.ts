import { TestBed } from '@angular/core/testing';

import { DeclarantDService } from './declarant-d.service';

describe('DeclarantDService', () => {
  let service: DeclarantDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeclarantDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
