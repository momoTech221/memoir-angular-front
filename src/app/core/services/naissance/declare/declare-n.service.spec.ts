import { TestBed } from '@angular/core/testing';

import { DeclareNService } from './declare-n.service';

describe('DeclareNService', () => {
  let service: DeclareNService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeclareNService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
