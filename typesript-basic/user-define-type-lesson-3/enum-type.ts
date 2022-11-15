//enum - store constants; duplicate value not allowed
//enum types - numeric, string and  heterogeneous 


// numeric enum
enum UserRequest {
    ReadData,
    // ReadData = 2,
    SaveData,
    UpdateData,
}

console.log(UserRequest);
console.log(UserRequest.ReadData);
console.log(UserRequest["ReadData"]);

console.log(UserRequest.SaveData);

// string enum
enum UserRequest {
ReadData = "READ_DATA",
// ReadData = 2,
SaveData = "SAVE_DATA",
UpdateData = "UPDATE_DATA",
}

console.log(UserRequest);
console.log(UserRequest.ReadData);
console.log(UserRequest.SaveData);
console.log(UserRequest["UpdateData"]);

// Heterogeneous enum
enum User {
id = 101,
name = "anisul",
}