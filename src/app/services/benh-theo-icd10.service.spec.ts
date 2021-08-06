import { TestBed } from '@angular/core/testing';

import { BenhTheoICD10Service } from './benh-theo-icd10.service';

describe('BenhTheoICD10Service', () => {
  let service: BenhTheoICD10Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BenhTheoICD10Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
