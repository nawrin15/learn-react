"use strict";
exports.__esModule = true;
exports.Student = void 0;
// without interface
var users = [];
var user1 = {
    id: 1,
    name: "Mr. Potato",
    age: 32
};
var user2 = { id: 2, name: "Ms. Tomato", age: 21 };
users.push(user1);
users.push(user2);
var printUserInfo = function (user) {
    console.log("userid = ".concat(user.id, ", name = ").concat(user.name, ", age = ").concat(user.age));
};
users.forEach(function (user) { return printUserInfo(user); });
var users = [];
var user1 = { id: 1, name: "Mr. Potato", age: 32 };
var user2 = { id: 2, name: "Ms. Tomato", age: 21 };
users.push(user1);
users.push(user2);
var printUserInfo = function (user) {
    console.log("userid = ".concat(user.id, ", name = ").concat(user.name, ", age = ").concat(user.age));
};
users.forEach(function (user) { return printUserInfo(user); });
var Student = /** @class */ (function () {
    function Student(fullName, age) {
        var _this = this;
        this.fullName = fullName;
        this.age = age;
        this.formatStudent = function () {
            return "name: ".concat(_this.fullName, ", age: ").concat(_this.age);
        };
    }
    return Student;
}());
exports.Student = Student;
var user = new Student("Mr. Potato", 32);
console.log(user);
console.log(user.formatStudent());
