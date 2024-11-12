import { TestBed } from '@angular/core/testing';

import { FormationDServiceService } from './formation-dservice.service';

describe('FormationDServiceService', () => {
  let service: FormationDServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormationDServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
