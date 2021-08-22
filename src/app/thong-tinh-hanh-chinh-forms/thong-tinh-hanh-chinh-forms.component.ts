import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ThongTinHanhChinhService } from '../services/thong-tin-hanh-chinh.service';
import { MAT_DATE_FORMATS } from '@angular/material/core';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-thong-tinh-hanh-chinh-forms',
  templateUrl: './thong-tinh-hanh-chinh-forms.component.html',
  styleUrls: ['./thong-tinh-hanh-chinh-forms.component.scss'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }],
})
export class ThongTinhHanhChinhFormsComponent implements OnInit {
  gioiTinh: any[] = [{ value: 'Nam' }, { value: 'Nữ' }, { value: 'N/A' }];
  nhomMau: any[] = [
    { value: 'A' },
    { value: 'B' },
    { value: 'AB' },
    { value: 'O' },
  ];
  heRH: any[] = [{ value: '+' }, { value: '-' }];
  tonGiao: any[] = [
    { value: 'Không' },
    { value: 'Phật giáo' },
    { value: 'Công giáo' },
    { value: 'Cao đài' },
    { value: 'Hào hỏa' },
    { value: 'Tin lành' },
    { value: 'Hồi giáo' },
    { value: 'Bà La Môn' },
    { value: 'Bà Ni' },
  ];

  quanHeChuHo: any[] = [
    { value: 'Anh' },
    { value: 'Bà' },
    { value: 'Ông' },
    { value: 'Cha' },
    { value: 'Mẹ' },
    { value: 'Chị' },
    { value: 'Em' },
  ];

  loaiGiayTo: any[] = [
    { value: 'Mã thẻ BHXH' },
    { value: 'Bảo hiểm y tế' },
    { value: 'Căn cước công dân' },
    { value: 'Chứng minh nhân dân' },
    { value: 'Hộ Chiếu' },
    { value: 'Bằng lái xe' },
    { value: 'Khác' },
  ];

  vietNamData = [
    {
      city: 'An Giang',
      district: [
        'Thành phố Long Xuyên',
        'Thành phố Châu Đốc',
        'Thị xã Tân Châu',
        'Huyện An Phú',
        'Huyện Châu Thành',
      ],
    },
    {
      city: 'Tp Hồ Chí Minh',
      district: [
        'Quận 1',
        'Quận 2',
        'Quận 3',
        'Quận 4',
        'Quận 5',
        'Quận 6',
        'Quận 7',
        'Quận 8',
        'Quận 9',
        'Quận 10',
        'Quận 11',
        'Quận 12',
      ],
    },
    {
      city: 'Bà Rịa - Vũng Tàu',
      district: [
        'Thành phố Vũng Tàu',
        'Thị xã Bà Rịa',
        'Thị xã Phú Mỹ',
        'Huyện Châu Đức',
        'Huyện Côn Đảo',
      ],
    },
  ];
  public districts: any[] = [];
  public danhSachLocation: any[] = [
    { city: 'Tp Hồ Chí Minh' },
    { city: 'Hà Nội' },
    { city: 'Vũng Tàu' },
  ];
  public danhSachQuocTich: any[] = [
    { name: 'Mỹ' },
    { name: 'Pháp' },
    { name: 'Việt Nam' },
  ];
  public danhSachDanToc: any[] = [
    { name: 'Kinh' },
    { name: 'Hoa' },
    { name: 'Ê- đê' },
  ];
  public date = new Date();
  public id: any;
  public thongTinHanhChinhForms: any = FormGroup;

  constructor(
    private readonly thongTinHanhChinhService: ThongTinHanhChinhService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  // Thay đổi quận
  public changeHoKhauThuongTru(event: any) {
    const city = event.value;
    const search = this.vietNamData.filter((data) => data.city === city);
    if (search && search.length > 0) {
      this.districts = search[0].district;
    }
  }

  // Thêm, cập nhập
  public onSubmit() {
    if (this.id == 0) {
      if (
        !this.thongTinHanhChinhForms.value.HoVaTen ||
        !this.thongTinHanhChinhForms.value.MaHSSK ||
        !this.thongTinHanhChinhForms.value.NgaySinh ||
        !this.thongTinHanhChinhForms.value.TinhDangKyKhaiSinh
      ) {
        alert('Vui lòng nhập đầy đủ thông tin');
        return false;
      } else {
        this.thongTinHanhChinhService.addThongTinHanhChinh(
          this.thongTinHanhChinhForms.value
        );
        this.router.navigate(['/']);
      }
    } else {
      this.thongTinHanhChinhService.editThongTinHanhChinh(
        this.thongTinHanhChinhForms.value
      );
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != 0) {
      this.thongTinHanhChinhForms = new FormGroup({
        MaHSSK: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.MaHSSK
        ),
        HoVaTen: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.HoVaTen
        ),
        NgaySinh: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.NgaySinh
        ),
        GioiTinh: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.GioiTinh
        ),
        TinhDangKyKhaiSinh: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.TinhDangKyKhaiSinh
        ),
        NhomMauHeABO: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.NhomMauHeABO
        ),
        HeRH: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.HeRH
        ),
        DanToc: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.DanToc
        ),
        QuocTich: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.QuocTich
        ),
        TonGiao: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.TonGiao
        ),
        NgheNghiep: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.NgheNghiep
        ),
        QuanHeVoiChuHo: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.QuanHeVoiChuHo
        ),
        LoaiGiayTo: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.LoaiGiayTo
        ),
        SoCMND: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.SoCMND
        ),
        NgayCap: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.NgayCap
        ),
        NoiCap: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.NoiCap
        ),
        SoTheBHYT: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.SoTheBHYT
        ),
        NoiĐKKCBBD: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.NoiĐKKCBBD
        ),
        NoiDKHoKhauThuongTru: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.NoiDKHoKhauThuongTru
        ),
        TinhThanhHoKhauThuongTru: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.NoiDKHoKhauThuongTru
        ),
        QuanHuyenHoKhauThuongTru: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.NoiDKHoKhauThuongTru
        ),
        PhuongXaHoKhauThuongTru: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.PhuongXaHoKhauThuongTru
        ),
        NoiOHienNay: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.NoiOHienNay
        ),
        TinhThanhChoOHienNay: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.TinhThanhChoOHienNay
        ),
        QuanHuyenChoOHienNay: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.QuanHuyenChoOHienNay
        ),
        PhuongXaChoOHienNay: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.PhuongXaChoOHienNay
        ),    
        SoDienThoaiCoDinh: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.SoDienThoaiCoDinh
        ),
        SoDienThoaiDiDong: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.SoDienThoaiDiDong
        ),
        email: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.email
        ),
        HoTenBo: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.HoTenBo
        ),
        HoTenMe: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.HoTenMe
        ),
        NguoiCSChinh: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.NguoiCSChinh
        ),
        QuanHe: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.QuanHe
        ),
        SoDienThoaiDiDongNguoiQuanHe: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.SoDienThoaiDiDongNguoiQuanHe
        ),
        SoDienThoaiCoDinhNguoiQuanHe: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.SoDienThoaiCoDinhNguoiQuanHe
        ),
        DiaChiNguoiQuanHe: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.DiaChiNguoiQuanHe
        ),
        EmailNguoiQuanHe: new FormControl(
          this.thongTinHanhChinhService.getDetailThongTinHanhChinh(
            this.id
          )?.emailNguoiQuanHe
        ),
      });
    } else {
      this.thongTinHanhChinhForms = new FormGroup({
        MaHSSK: new FormControl('', [Validators.required]),
        HoVaTen: new FormControl('', [Validators.required]),
        NgaySinh: new FormControl('', [Validators.required]),
        GioiTinh: new FormControl('', [Validators.required]),
        TinhDangKyKhaiSinh: new FormControl('', [Validators.required]),
        NhomMauHeABO: new FormControl(''),
        HeRH: new FormControl(''),
        DanToc: new FormControl(''),
        QuocTich: new FormControl(''),
        TonGiao: new FormControl(''),
        NgheNghiep: new FormControl(''),
        QuanHeVoiChuHo: new FormControl(''),
        LoaiGiayTo: new FormControl(''),
        SoCMND: new FormControl(''),
        NgayCap: new FormControl(''),
        NoiCap: new FormControl(''),
        SoTheBHYT: new FormControl(''),
        NoiĐKKCBBD: new FormControl(''),
        NoiDKHoKhauThuongTru: new FormControl(''),
        TinhThanhHoKhauThuongTru: new FormControl('', [Validators.required]),
        QuanHuyenHoKhauThuongTru: new FormControl('', [Validators.required]),
        PhuongXaHoKhauThuongTru: new FormControl(''),
        NoiOHienNay: new FormControl(''),
        TinhThanhChoOHienNay: new FormControl('', [Validators.required]),
        QuanHuyenChoOHienNay: new FormControl('', [Validators.required]),
        PhuongXaChoOHienNay: new FormControl(''),
        SoDienThoaiCoDinh: new FormControl(''),
        SoDienThoaiDiDong: new FormControl(''),
        email: new FormControl(''),
        HoTenBo: new FormControl(''),
        HoTenMe: new FormControl(''),
        NguoiCSChinh: new FormControl(''),
        QuanHe: new FormControl(''),
        SoDienThoaiDiDongNguoiQuanHe: new FormControl(''),
        SoDienThoaiCoDinhNguoiQuanHe: new FormControl(''),
        DiaChiNguoiQuanHe: new FormControl(''),
        EmailNguoiQuanHe: new FormControl(''),
      });
    }
  }
}
