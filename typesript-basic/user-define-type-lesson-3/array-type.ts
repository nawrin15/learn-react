// let users = ["anis", "rabu", "pinky"]; // string[]

// let users: string[];                //Method-1
// users = ["anis", "rabu", "pinky"];

let users: Array<string>;         //Method-1
users = ["anis", "rabu", "pinky"];
users.sort()

console.log(users)

let multipleTypes : (string| number)[];
multipleTypes = [1, "abc"]
console.log(multipleTypes)

let multipleTypes2 : Array<string| number>;
multipleTypes2 = [1, "abc"]
console.log(multipleTypes2)