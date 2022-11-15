// function signature
let userInfo1: void;
let userInfo2: () => void;
let userInfo4: (name: string) => void;
let userInfo3: (name: string) => string;

userInfo1 = () => {
  console.log("Anisul Islam is 32 years old");
};

userInfo2 = () => {
  console.log('sdsds');
};

userInfo4 = (name: string) => {
  console.log(`${name} is 32 years old`);
};

userInfo3 = (name: string): string => {
  return `${name} is 32 years old`;
};
userInfo1();
userInfo2();
userInfo4("Anisul Islam");
console.log(userInfo3("Anisul Islam"));