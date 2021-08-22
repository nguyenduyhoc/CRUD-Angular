import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinhHanhChinhFormsComponent } from './thong-tinh-hanh-chinh-forms.component';

describe('ThongTinhHanhChinhFormsComponent', () => {
  let component: ThongTinhHanhChinhFormsComponent;
  let fixture: ComponentFixture<ThongTinhHanhChinhFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThongTinhHanhChinhFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinhHanhChinhFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
