const form1 = document.querySelector("form");
console.log(form1);
const form2 = document.querySelector("form")!;
console.log(form2);
const form3 = document.querySelector("form") as HTMLFormElement;
console.log(form3);
const form4 = document.querySelector(".user-form");
console.log(form4);
const userForm = document.querySelector(".user-form") as HTMLFormElement;
console.log(userForm);
const username = document.querySelector("#username") as HTMLInputElement;
console.log(username);
const email = document.querySelector("#useremail") as HTMLInputElement;
console.log(email);
const userCountrySelect = document.querySelector(
    "#country"
  ) as HTMLSelectElement;
  console.log(userCountrySelect);

  const userFeedback = document.querySelector("#feedback") as HTMLTextAreaElement;
  console.log(userFeedback);

userForm.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    const data = {
        username: username.value,
        email: email.value,
        userCountry: userCountrySelect.value,
        userFeedback: userFeedback.value
    }
    console.log(data)
})

