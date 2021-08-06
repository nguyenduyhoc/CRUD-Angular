import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBenhTheoICD10Component } from './item-benh-theo-icd10.component';

describe('ItemBenhTheoICD10Component', () => {
  let component: ItemBenhTheoICD10Component;
  let fixture: ComponentFixture<ItemBenhTheoICD10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemBenhTheoICD10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemBenhTheoICD10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
