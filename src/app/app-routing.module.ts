import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DanhSachBenhTheoICD10Component } from './danh-sach-benh-theo-icd10/danh-sach-benh-theo-icd10.component';
import { ThongTinhHanhChinhFormsComponent } from './thong-tinh-hanh-chinh-forms/thong-tinh-hanh-chinh-forms.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';

const routes: Routes = [
  { path: '', component: TrangChuComponent },
  { path: 'ThongTinHanhChinhForms/:id', component: ThongTinhHanhChinhFormsComponent },

  {
    path: 'giao-dien-benh-theo-ICD',
    component: DanhSachBenhTheoICD10Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
