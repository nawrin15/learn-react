import * as student from "./student";
import {student_name as name, student_age as age} from "./student";
import {User} from "./class-user";

student.display(student.student_name, student.student_age)
console.log(name, age)

let user_a = new User("kk", 16)
user_a.display()