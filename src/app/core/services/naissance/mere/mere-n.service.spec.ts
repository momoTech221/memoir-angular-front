import { TestBed } from '@angular/core/testing';

import { MereNService } from './mere-n.service';

describe('MereNService', () => {
  let service: MereNService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MereNService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
