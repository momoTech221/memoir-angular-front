import { TestBed } from '@angular/core/testing';

import { MentionNService } from './mention-n.service';

describe('MentionNService', () => {
  let service: MentionNService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MentionNService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
