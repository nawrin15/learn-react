// Union 
function userIdDataType(userId: string | number) {
    console.log(typeof userId);
}
  
userIdDataType("123"); // no error
userIdDataType(123); // no error
// userIdDataType(true); // error

// Union 
function userIdDataType2(userId: string | number | boolean) {
    console.log(typeof userId);
}
  
userIdDataType2("123"); // no error
userIdDataType2(123); // no error
userIdDataType2(true); // error