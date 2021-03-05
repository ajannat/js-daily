"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
// type basics
var name = 'jannat';
console.log(name);
// name = 34; cannot assign number to type string
// explicit and union types
var union;
union = "jannat";
union = 34;
// dynamic types
var type;
type = 'any';
type = 26;
type = false;
// functions
var myFunc = function (a, b) {
    console.log(a + b);
};
myFunc(5, 6);
var userObject = function (id, user) {
    console.log(id, user.age, ' ', user.name);
};
// function signatures
var myFunction;
myFunction = function (a, b, z, user) {
    return '123';
};
// module
var Player_1 = require("./classes/Player");
var pl = new Player_1.Player('jannat', 25, true);
var arr = [];
arr.push(pl);
// access modifiers
var Player2 = /** @class */ (function () {
    function Player2(n, a, m) {
        this.name = n;
        this.age = a;
        this.male = m;
    }
    return Player2;
}());
var pl2 = new Player2('jannat', 25, true); // cannot get or set using instance
function drawRectangle(value) {
    var width = value.width;
    var length = value.length;
}
drawRectangle({
    width: 30,
    length: 20
});
// generics
var addID = function (obj) {
    var id = 1;
    return __assign(__assign({}, obj), { id: id });
};
var user = addID({
    name: 'jannat',
    age: 26
});
// enums
var ResponseType;
(function (ResponseType) {
    ResponseType[ResponseType["SUCCESS"] = 0] = "SUCCESS";
    ResponseType[ResponseType["FAILURE"] = 1] = "FAILURE";
    ResponseType[ResponseType["NOTFOUND"] = 2] = "NOTFOUND";
})(ResponseType || (ResponseType = {}));
;
var response1 = {
    status: 200,
    type: ResponseType.SUCCESS,
    data: 'test'
};
// tuples
var a = [12, 'asd'];
// a[1] = 12; cannot assign number to type string
