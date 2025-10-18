"use strict";
const form1 = document.querySelector("form");
console.log(form1);
const form2 = document.querySelector("form");
console.log(form2);
const form3 = document.querySelector("form");
console.log(form3);
const form4 = document.querySelector(".user-form");
console.log(form4);
const userForm = document.querySelector(".user-form");
console.log(userForm);
const username = document.querySelector("#username");
console.log(username);
const email = document.querySelector("#useremail");
console.log(email);
const userCountrySelect = document.querySelector("#country");
console.log(userCountrySelect);
const userFeedback = document.querySelector("#feedback");
console.log(userFeedback);
userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
        username: username.value,
        email: email.value,
        userCountry: userCountrySelect.value,
        userFeedback: userFeedback.value
    };
    console.log(data);
});
