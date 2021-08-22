import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ThongTinHanhChinh } from '../models/ThongTinHanhChinh.models';
import { ThongTinHanhChinhService } from '../services/thong-tin-hanh-chinh.service';


@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.scss'],
})
export class TrangChuComponent implements OnInit {
  
  
  public itemCheck: any;
  displayedColumns: string[] = [
    'STT',
    'Khoa',
    'HovaTen',
    'MaHSSK',
    'NgaySinh',
    'GioiTinh',
    'SoCMND',
    'DiaChi',
  ];
  constructor(
    private readonly thongTinHanhChinhService: ThongTinHanhChinhService,
    private readonly router: Router
  ) {}

  public themThongTin() {
    this.router.navigate(['ThongTinHanhChinhForms', 0]);
  }

  public capNhat(id: any) {
    this.router.navigate(['ThongTinHanhChinhForms', id]);
  }

  ngOnInit(): void {
   
  }
  
  get mangThongTinHanhChinh() {
    return this.thongTinHanhChinhService.getAllThongTinhHanhChinh()
  }

}
