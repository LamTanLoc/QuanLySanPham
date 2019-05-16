import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLySanPhamComponent } from './quan-ly-san-pham.component';
import { DanhMucSanPhamComponent } from './danh-muc-san-pham/danh-muc-san-pham.component';

@NgModule({
  declarations: [QuanLySanPhamComponent, DanhMucSanPhamComponent],
  imports: [
    CommonModule
  ],
  exports: [
    QuanLySanPhamComponent, DanhMucSanPhamComponent
  ]
})
export class QuanLySanPhamModule { }
