import { TestBed } from '@angular/core/testing';

import { JugementNService } from './jugement-n.service';

describe('JugementNService', () => {
  let service: JugementNService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JugementNService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
