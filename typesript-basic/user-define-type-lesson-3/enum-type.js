//enum - store constants; duplicate value not allowed
//enum types - numeric, string and  heterogeneous 
// numeric enum
var UserRequest;
(function (UserRequest) {
    UserRequest[UserRequest["ReadData"] = 0] = "ReadData";
    // ReadData = 2,
    UserRequest[UserRequest["SaveData"] = 1] = "SaveData";
    UserRequest[UserRequest["UpdateData"] = 2] = "UpdateData";
})(UserRequest || (UserRequest = {}));
console.log(UserRequest);
console.log(UserRequest.ReadData);
console.log(UserRequest["ReadData"]);
console.log(UserRequest.SaveData);
// string enum
(function (UserRequest) {
    UserRequest["ReadData"] = "READ_DATA";
    // ReadData = 2,
    UserRequest["SaveData"] = "SAVE_DATA";
    UserRequest["UpdateData"] = "UPDATE_DATA";
})(UserRequest || (UserRequest = {}));
console.log(UserRequest);
console.log(UserRequest.ReadData);
console.log(UserRequest.SaveData);
console.log(UserRequest["UpdateData"]);
// Heterogeneous enum
var User;
(function (User) {
    User[User["id"] = 101] = "id";
    User["name"] = "anisul";
})(User || (User = {}));
