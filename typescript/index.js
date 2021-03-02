// type aliases
var userObject = function (id, user) {
    console.log(id, user.age, ' ', user.name);
};
// function signatures
var myFunction;
myFunction = function (a, b, z, user) {
    return '123';
};
// classes
var Player = /** @class */ (function () {
    function Player(n, a, m) {
        this.name = n;
        this.age = a;
        this.male = m;
    }
    return Player;
}());
var pl = new Player('jannat', 25, true);
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
var pl2 = new Player2('jannat', 25, true);
// cannot get or set using instance
