import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo2Component } from './demo2.component';
import { Demo2HeaderComponent } from './demo2-header/demo2-header.component';

import { Demo2SmartphoneComponent } from './demo2-smartphone/demo2-smartphone.component';
import { Demo2LaptopComponent } from './demo2-laptop/demo2-laptop.component';
import { Demo2ItemComponent } from './demo2-item/demo2-item.component';
import { Demo2FooterComponent } from './demo2-footer/demo2-footer.component';

import { Demo2CarouselComponent } from './demo2-carousel/demo2-carousel.component';
import { Demo2FooterItemComponent } from './demo2-footer-item/demo2-footer-item.component';



@NgModule({
  declarations: [Demo2Component, Demo2HeaderComponent, Demo2SmartphoneComponent, Demo2LaptopComponent, Demo2ItemComponent, Demo2FooterComponent, Demo2CarouselComponent, Demo2FooterItemComponent,],
  imports: [
    CommonModule
  ],
  exports: [
    Demo2Component, 
   
  ]
  
})
export class Demo2Module {
  
 }
