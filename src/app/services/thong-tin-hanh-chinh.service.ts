import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ThongTinHanhChinh } from '../models/ThongTinHanhChinh.models';

@Injectable({
  providedIn: 'root',
})
export class ThongTinHanhChinhService {
  _thongTinHanhChinh: ThongTinHanhChinh[] = [];

  addThongTinHanhChinh(content: any) {
    this._thongTinHanhChinh.unshift(content);
  }

  editThongTinHanhChinh(content: any) {
    console.log(content)
    const index = this._thongTinHanhChinh.findIndex((c) => c.MaHSSK === content.MaHSSK);
    this._thongTinHanhChinh[index] = content;
  }

  getDetailThongTinHanhChinh(id:any){
    const item = this._thongTinHanhChinh.find((c)=>c.MaHSSK === id)
    return item
  }

  getAllThongTinhHanhChinh() {
    return this._thongTinHanhChinh;
  }
}
