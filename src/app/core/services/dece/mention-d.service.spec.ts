import { TestBed } from '@angular/core/testing';

import { MentionDService } from './mention-d.service';

describe('MentionDService', () => {
  let service: MentionDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MentionDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
