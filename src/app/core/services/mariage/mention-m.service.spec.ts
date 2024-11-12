import { TestBed } from '@angular/core/testing';

import { MentionMService } from './mention-m.service';

describe('MentionMService', () => {
  let service: MentionMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MentionMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
