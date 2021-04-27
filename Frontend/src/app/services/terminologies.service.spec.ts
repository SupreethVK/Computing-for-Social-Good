import { TestBed } from '@angular/core/testing';

import { TerminologiesService } from './terminologies.service';

describe('TerminologiesService', () => {
  let service: TerminologiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerminologiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
