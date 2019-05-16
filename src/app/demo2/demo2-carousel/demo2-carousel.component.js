"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var Demo2CarouselComponent = /** @class */ (function () {
    function Demo2CarouselComponent() {
    }
    Demo2CarouselComponent.prototype.ngOnInit = function () {
    };
    Demo2CarouselComponent = __decorate([
        core_1.Component({
            selector: 'app-demo2-carousel',
            templateUrl: './demo2-carousel.component.html',
            styleUrls: ['./demo2-carousel.component.scss']
        })
    ], Demo2CarouselComponent);
    return Demo2CarouselComponent;
}());
exports.Demo2CarouselComponent = Demo2CarouselComponent;
