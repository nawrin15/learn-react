// function signature
var userInfo1;
var userInfo2;
var userInfo4;
var userInfo3;
userInfo1 = function () {
    console.log("Anisul Islam is 32 years old");
};
userInfo2 = function () {
    console.log('sdsds');
};
userInfo4 = function (name) {
    console.log("".concat(name, " is 32 years old"));
};
userInfo3 = function (name) {
    return "".concat(name, " is 32 years old");
};
userInfo1();
userInfo2();
userInfo4("Anisul Islam");
console.log(userInfo3("Anisul Islam"));
