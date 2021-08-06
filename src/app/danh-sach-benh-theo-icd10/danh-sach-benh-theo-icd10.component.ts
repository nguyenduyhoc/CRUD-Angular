import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ItemBenhTheoICD10Component } from '../item-benh-theo-icd10/item-benh-theo-icd10.component';
import { BenhTheoICD10 } from '../models/BenhTheoICD10.models';
import { BenhTheoICD10Service } from '../services/benh-theo-icd10.service';

@Component({
  selector: 'app-danh-sach-benh-theo-icd10',
  templateUrl: './danh-sach-benh-theo-icd10.component.html',
  styleUrls: ['./danh-sach-benh-theo-icd10.component.scss'],
})
export class DanhSachBenhTheoICD10Component implements OnInit {
  searchTenBenh: any;
  isPopupOpened = true;
  displayedColumns = ['id', 'maBenh', 'tenBenh', 'update', 'delete'];
  public mangBenhTheoICD10: BenhTheoICD10[] = [];
  //Pagination
  public pageSlice = this.mangBenhTheoICD10.slice(0, 5);

  constructor(
    private dialog: MatDialog,
    private benhTheoICD10SV: BenhTheoICD10Service
  ) {}

  // Cập nhật danh sách bệnh mới
  capNhatDanhSachBenh() {
    //lay danh sach mảng
    this.benhTheoICD10SV.layDanhSachBenh().subscribe((data) => {
      this.mangBenhTheoICD10 = data;
      //Pagination
      this.pageSlice = data;
    });
    // update lại mảng
    this.benhTheoICD10SV.mangBenhTheoICD10$.subscribe((item) => {
      this.mangBenhTheoICD10 = item;
      //Pagination
      this.pageSlice = item;
    });
  }

  // Open pop up
  openPopUp() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog?.open(ItemBenhTheoICD10Component, {
      data: {},
    });

    dialogRef?.afterClosed().subscribe((result) => {
      this.isPopupOpened = false;
    });
  }

  // Truyền dữ liệu cho Thêm -  Sửa  model
  capNhatBanGhi(id: number) {
    this.isPopupOpened = true;
    const detailBenh = this.mangBenhTheoICD10.find((item) => item.id === id);
    const dialogRef = this.dialog.open(ItemBenhTheoICD10Component, {
      data: detailBenh,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.isPopupOpened = false;
    });
  }

  // Xóa bản ghi
  xoaBanGhi(id: number) {
    this.benhTheoICD10SV.xoaBenh(id).subscribe((data) => {
      alert('Xóa thành công');
      this.capNhatDanhSachBenh();
      console.log(data);
    });
  }

  //Pagination
  OnPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.mangBenhTheoICD10.length) {
      endIndex = this.mangBenhTheoICD10.length;
    }
    this.pageSlice = this.mangBenhTheoICD10.slice(startIndex, endIndex);
  }
  //Search:
  search() {
     if (this.searchTenBenh && this.searchTenBenh !== "") {
        this.pageSlice = this.pageSlice.filter((res: { tenBenh: string; }) => {
      return res.tenBenh?.toLocaleLowerCase().match(this.searchTenBenh.toLocaleLowerCase());
      })
    } else if (this.searchTenBenh == "") {
      this.ngOnInit();
    }
  }

  // Cập nhật lại danh sách button  
  capNhatLaiDanhSach(){
    this.capNhatDanhSachBenh()
    this.searchTenBenh = ''
  }

  ngOnInit(): void {
    this.capNhatDanhSachBenh();
  }
}
