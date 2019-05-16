import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-danh-muc-san-pham',
  templateUrl: './danh-muc-san-pham.component.html',
  styleUrls: ['./danh-muc-san-pham.component.scss']
})
export class DanhMucSanPhamComponent implements OnInit {

  DanhSachSanPham: any = [];
  SanPham: any = {};

  ThemSanPham(maSanPham, tenSanPham, giaSanPham) {
    this.SanPham = { maSanPham, tenSanPham, giaSanPham }
    this.DanhSachSanPham.push(this.SanPham);
    localStorage.setItem('danhSachSanPhamLocal', JSON.stringify(this.DanhSachSanPham));

  }



  constructor() { }

  ngOnInit() {
    let mangLayTuLocal = JSON.parse(localStorage.getItem("danhSachSanPhamLocal"));
    if (mangLayTuLocal !== null) {
      this.DanhSachSanPham = mangLayTuLocal;
      console.log(this.DanhSachSanPham);
    }
  }

}
