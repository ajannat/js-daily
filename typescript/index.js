"use strict";
// type aliases
exports.__esModule = true;
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
