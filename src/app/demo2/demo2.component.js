"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var Demo2Component = /** @class */ (function () {
    function Demo2Component() {
    }
    Demo2Component.prototype.ngOnInit = function () {
    };
    Demo2Component = __decorate([
        core_1.Component({
            selector: 'app-demo2',
            templateUrl: './demo2.component.html',
            styleUrls: ['./demo2.component.scss']
        })
    ], Demo2Component);
    return Demo2Component;
}());
exports.Demo2Component = Demo2Component;
