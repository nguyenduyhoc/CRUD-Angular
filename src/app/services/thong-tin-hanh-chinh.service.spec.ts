import { TestBed } from '@angular/core/testing';

import { ThongTinHanhChinhService } from './thong-tin-hanh-chinh.service';

describe('ThongTinHanhChinhService', () => {
  let service: ThongTinHanhChinhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThongTinHanhChinhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
