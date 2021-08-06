import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachBenhTheoICD10Component } from './danh-sach-benh-theo-icd10.component';

describe('DanhSachBenhTheoICD10Component', () => {
  let component: DanhSachBenhTheoICD10Component;
  let fixture: ComponentFixture<DanhSachBenhTheoICD10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhSachBenhTheoICD10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachBenhTheoICD10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
