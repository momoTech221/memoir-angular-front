import { TestBed } from '@angular/core/testing';

import { FormationSanitaireService } from './formation-sanitaire.service';

describe('FormationSanitaireService', () => {
  let service: FormationSanitaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormationSanitaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
