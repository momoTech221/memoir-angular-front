import { TestBed } from '@angular/core/testing';

import { DeclarationDService } from './declaration-d.service';

describe('DeclarationDService', () => {
  let service: DeclarationDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeclarationDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
