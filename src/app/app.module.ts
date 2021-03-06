import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DanhSachBenhTheoICD10Component } from './danh-sach-benh-theo-icd10/danh-sach-benh-theo-icd10.component';
import { ItemBenhTheoICD10Component } from './item-benh-theo-icd10/item-benh-theo-icd10.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { ThongTinhHanhChinhFormsComponent } from './thong-tinh-hanh-chinh-forms/thong-tinh-hanh-chinh-forms.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    DanhSachBenhTheoICD10Component,
    ItemBenhTheoICD10Component,
    SearchFilterPipe,
    TrangChuComponent,
    ThongTinhHanhChinhFormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MomentDateModule,
    CommonModule,
    MatFormFieldModule
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
