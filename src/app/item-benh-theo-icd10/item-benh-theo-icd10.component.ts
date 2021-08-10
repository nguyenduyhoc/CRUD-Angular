import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BenhTheoICD10Service } from '../services/benh-theo-icd10.service';

@Component({
  selector: 'app-item-benh-theo-icd10',
  templateUrl: './item-benh-theo-icd10.component.html',
  styleUrls: ['./item-benh-theo-icd10.component.scss'],
})
export class ItemBenhTheoICD10Component implements OnInit {
  public benhICD10Form!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private benhTheoICD10SV: BenhTheoICD10Service,
    private dialogRef: MatDialogRef<ItemBenhTheoICD10Component>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    // Them benh
    if (isNaN(this.data.id)) {
      this.benhTheoICD10SV
        .themBenh(this.benhICD10Form.value)
        .subscribe((data) => {
          console.log('Add: ', data);
          alert('Thêm thành công!');
          // gửi dữ liệu mới lên danhSacBenhTheoICD10Component
          this.benhTheoICD10SV.layDanhSachBenh().subscribe((data) => {
            this.benhTheoICD10SV.mangBenhTheoICD10$.next(data);
          });
        });

      this.dialogRef.close();
    } else {
      // Cap nhat benh
      this.benhTheoICD10SV
        .capNhatBenh(this.data.id, this.benhICD10Form.value)
        .subscribe((data) => {
          alert('Cập nhật thành công!');
          console.log('Update: ', data);
          // gửi dữ liệu mới lên danhSacBenhTheoICD10Component
          this.benhTheoICD10SV.layDanhSachBenh().subscribe((data) => {
            this.benhTheoICD10SV.mangBenhTheoICD10$.next(data);
          });
        });
      this.dialogRef.close();
    }
  }

  ngOnInit(): void {
    this.benhICD10Form = this._formBuilder.group({
      id: [this.data.id],
      maBenh: [this.data.maBenh, [Validators.required]],
      tenBenh: [this.data.tenBenh, [Validators.required]],
    });
  }
}
