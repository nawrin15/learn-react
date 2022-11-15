var names;
names = { name1: "anis" };
console.log(names);
var users;
users = [];
users = [{ name: "gg" }];
var user1;
user1 = { userName: "anis", userId: 101 };
users.push(user1);
var user2;
user2 = { userName: "rabu", userId: 102 };
users.push(user2);
var user3;
user3 = { userName: "oooo" };
users.push(user3);
for (var key in users) {
    console.log(users[key]);
}
