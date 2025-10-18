// public, private, protected, readonly
class User {
    readonly userName: string;
    public age: number;
    protected birth_day: Date;

    constructor(userName: string, age: number) {
      this.userName = userName;
      this.age = age;
      this.birth_day = new Date();
    }

    display(): void {
      console.log(`username: ${this.userName}, age: ${this.age}`);
    }
  }

  class Student extends User {
    private studentId: number;

    constructor(userName: string, age: number, studentId: number) {
      super(userName, age);
      this.studentId = studentId;
    }
    display(): void {
      console.log(
        `username: ${this.userName}, age: ${this.age}, id: ${this.studentId}, birthday: ${this.birth_day}`
      );
    }

    setStudentId(studentId: number): void {
      this.studentId = studentId;
    }

    getStudentId(): number {
      return this.studentId;
    }
  }

  let student1 = new Student("keya", 31, 1302020015);
  student1.setStudentId(1302020017);
  console.log(student1.getStudentId());
  student1.display();

  let user1 = new User("robi", 23);
  console.log(user1.userName);
  // user1.display();
