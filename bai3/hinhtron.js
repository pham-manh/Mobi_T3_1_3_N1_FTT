"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toado_1 = require("./toado");
var HinhTron = /** @class */ (function () {
    function HinhTron(_tam, _banKinh) {
        this.PI_VALUE = 3.14;
        this.tam = _tam;
        this.banKinh = _banKinh;
    }
    HinhTron.prototype.getArea = function () {
        return this.PI_VALUE * Math.pow(this.banKinh, 2);
    };
    HinhTron.prototype.getPerimeter = function () {
        return this.PI_VALUE * this.banKinh * 2;
    };
    HinhTron.prototype.getInfo = function () {
        return "H\u00ECnh tr\u00F2n c\u00F3 t\u00E2m O(".concat(this.tam.getX, ", ").concat(this.tam.getY, ") v\u1EDBi b\u00E1n k\u00EDnh ").concat(this.banKinh, " c\u00F3 di\u1EC7n t\u00EDch v\u00E0 chu vi l\u1EA7n l\u01B0\u1EE3t l\u00E0 ").concat(this.getArea(), " v\u00E0 ").concat(this.getPerimeter());
    };
    return HinhTron;
}());
var mainBai3 = function () {
    var hinhTron = new HinhTron(new toado_1.ToaDo(5, 5), 5);
    console.log(hinhTron.getInfo());
};
mainBai3();
