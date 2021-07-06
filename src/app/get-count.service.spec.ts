import { TestBed } from '@angular/core/testing';

import { GetCountService } from './get-count.service';

describe('GetCountService', () => {
  let service: GetCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
