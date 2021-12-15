import { TestBed } from '@angular/core/testing';

import { DoctypeValidatorService } from './doctype-validator.service';

describe('DoctypeValidatorService', () => {
  let service: DoctypeValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctypeValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
