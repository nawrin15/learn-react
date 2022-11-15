// Union 
function userIdDataType(userId) {
    console.log(typeof userId);
}
userIdDataType("123"); // no error
userIdDataType(123); // no error
// userIdDataType(true); // error
// Union 
function userIdDataType2(userId) {
    console.log(typeof userId);
}
userIdDataType2("123"); // no error
userIdDataType2(123); // no error
userIdDataType2(true); // error
