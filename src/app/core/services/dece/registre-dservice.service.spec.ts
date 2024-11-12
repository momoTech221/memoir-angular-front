import { TestBed } from '@angular/core/testing';

import { RegistreDServiceService } from './registre-dservice.service';

describe('RegistreDServiceService', () => {
  let service: RegistreDServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistreDServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
