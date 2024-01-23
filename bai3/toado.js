"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToaDo = void 0;
var ToaDo = /** @class */ (function () {
    function ToaDo(_x, _y, _ten) {
        if (_ten) {
            this.ten = _ten;
        }
        this.x = _x;
        this.y = _y;
    }
    Object.defineProperty(ToaDo.prototype, "getTen", {
        get: function () {
            return this.ten;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ToaDo.prototype, "getX", {
        get: function () {
            return this.x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ToaDo.prototype, "getY", {
        get: function () {
            return this.y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ToaDo.prototype, "setTen", {
        set: function (_ten) {
            this.ten = _ten;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ToaDo.prototype, "setX", {
        set: function (_x) {
            this.x = _x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ToaDo.prototype, "setY", {
        set: function (_y) {
            this.y = _y;
        },
        enumerable: false,
        configurable: true
    });
    return ToaDo;
}());
exports.ToaDo = ToaDo;
