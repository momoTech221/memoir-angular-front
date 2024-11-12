import { TestBed } from '@angular/core/testing';

import { TemoinDService } from './temoin-d.service';

describe('TemoinDService', () => {
  let service: TemoinDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemoinDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
