"use strict";
exports.__esModule = true;
exports.subtraction = exports.addition = exports.fun = exports.arithematic = void 0;
var arithematic = /** @class */ (function () {
    //constructor
    function arithematic(x, y) {
        this.no1 = x;
        this.no2 = y;
        this.ans = 0;
    }
    //behavoiur
    arithematic.prototype.Addition = function () {
        this.ans = this.no1 + this.no2;
        return this.ans;
    };
    arithematic.prototype.Subtraction = function () {
        this.ans = this.no1 - this.no2;
        return this.ans;
    };
    return arithematic;
}());
exports.arithematic = arithematic;
var fun = function (no1, no2) {
    return no1 + no2;
};
exports.fun = fun;
function addition(no1, no2) {
    var ans = 0;
    ans = no1 + no2;
    return ans;
}
exports.addition = addition;
function subtraction(no1, no2) {
    var ans = 0;
    ans = no1 - no2;
    return ans;
}
exports.subtraction = subtraction;
