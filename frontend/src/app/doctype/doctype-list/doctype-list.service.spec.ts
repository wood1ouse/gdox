import { TestBed } from '@angular/core/testing';

import { DoctypeListService } from './doctype-list.service';

describe('DoctypeListService', () => {
  let service: DoctypeListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctypeListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
