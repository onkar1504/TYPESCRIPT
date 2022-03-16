"use strict";
exports.__esModule = true;
var server_1 = require("./server"); // apn ithe baherun function aanla mhnje server file kadun but titheun export krla pahije 
var x = 11;
var y = 20;
var ret = 0;
ret = server_1.fun(x, y);
console.log("addition is:", ret);
ret = server_1.addition(x, y);
console.log("addition is:", ret);
ret = server_1.subtraction(x, y);
console.log("subtraction is:", ret);
var ret = 0;
var obj1 = new server_1.arithematic(10, 11);
var ret = obj1.Addition();
console.log("addition is:", ret);
var obj2 = new server_1.arithematic(20, 11);
var ret = obj1.Subtraction();
console.log("subtraction  is:", ret);
