import { TestBed } from '@angular/core/testing';

import { ABCService } from './abc.service';

describe('ABCService', () => {
  let service: ABCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ABCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
