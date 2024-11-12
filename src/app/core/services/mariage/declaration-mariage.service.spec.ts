import { TestBed } from '@angular/core/testing';

import { DeclarationMariageService } from './declaration-mariage.service';

describe('DeclarationMariageService', () => {
  let service: DeclarationMariageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeclarationMariageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
