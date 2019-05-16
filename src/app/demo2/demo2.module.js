"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var demo2_component_1 = require("./demo2.component");
var demo2_header_component_1 = require("./demo2-header/demo2-header.component");
var demo2_smartphone_component_1 = require("./demo2-smartphone/demo2-smartphone.component");
var demo2_laptop_component_1 = require("./demo2-laptop/demo2-laptop.component");
var demo2_item_component_1 = require("./demo2-item/demo2-item.component");
var demo2_footer_component_1 = require("./demo2-footer/demo2-footer.component");
var demo2_carousel_component_1 = require("./demo2-carousel/demo2-carousel.component");
var demo2_footer_item_component_1 = require("./demo2-footer-item/demo2-footer-item.component");
var Demo2Module = /** @class */ (function () {
    function Demo2Module() {
    }
    Demo2Module = __decorate([
        core_1.NgModule({
            declarations: [demo2_component_1.Demo2Component, demo2_header_component_1.Demo2HeaderComponent, demo2_smartphone_component_1.Demo2SmartphoneComponent, demo2_laptop_component_1.Demo2LaptopComponent, demo2_item_component_1.Demo2ItemComponent, demo2_footer_component_1.Demo2FooterComponent, demo2_carousel_component_1.Demo2CarouselComponent, demo2_footer_item_component_1.Demo2FooterItemComponent,],
            imports: [
                common_1.CommonModule
            ],
            exports: [
                demo2_component_1.Demo2Component,
            ]
        })
    ], Demo2Module);
    return Demo2Module;
}());
exports.Demo2Module = Demo2Module;
