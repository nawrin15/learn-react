"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("username: ".concat(this.userName, ", age: ").concat(this.age));
    };
    return User;
}());
exports.User = User;
var user1 = new User("Anisul Islam", 25);
user1.display();
var user2 = new User("Rabeya Islam", 31);
user2.display();
