import { TestBed } from '@angular/core/testing';

import { TemoinNService } from './temoin-n.service';

describe('TemoinNService', () => {
  let service: TemoinNService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemoinNService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
