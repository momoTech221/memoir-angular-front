import { TestBed } from '@angular/core/testing';

import { TemoinMService } from './temoin-m.service';

describe('TemoinMService', () => {
  let service: TemoinMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemoinMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
