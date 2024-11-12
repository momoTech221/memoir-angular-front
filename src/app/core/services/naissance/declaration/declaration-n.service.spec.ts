import { TestBed } from '@angular/core/testing';

import { DeclarationNService } from './declaration-n.service';

describe('DeclarationNService', () => {
  let service: DeclarationNService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeclarationNService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
