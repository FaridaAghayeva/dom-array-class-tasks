// Tasks -DOM
//task 1

document.getElementById("demo").textContent = "Hello, World!";

//task 2

document.getElementById("demo").innerHTML = "<strong>Hello, World!</strong>";

//task 3

document.getElementById("myImage").src = "https://picsum.photos/536/354";

//task 4

document.getElementById("myElement").style.display = "none";

// task 5

const visibleElement = document.getElementById("myElement");
document.getElementById("btn").addEventListener("click", () => {
  if (visibleElement.style.display === "none") {
    visibleElement.style.display = "block";
  } else {
    visibleElement.style.display = "none";
  }
});

// task 6

const newElement = document.createElement("p");
newElement.textContent = "Hello, World!";
document.getElementById("container").append(newElement);

//task 7

const myElement = document.getElementById("myElement");

if (myElement.classList.contains("highlight")) {
  console.log(true);
} else console.log(false);

//task 8

const element = document.getElementById("myElement");
element.parentNode.removeChild(element);

// task 9
const form = document.getElementById("myForm");
const email = document.getElementById("email2");
const emailError = document.getElementById("emailError");
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValue = email.value.trim();

  if (!isValidEmail(emailValue)) {
    emailError.style.color = "red";
    emailError.style.display = "inline";
  } else {
    emailError.style.display = "none";
  }
});

// task 10
const form2 = document.getElementById("myForm2");
const password = document.getElementById("password");
const password2 = document.getElementById("confirmPassword");
const passwordError = document.getElementById("passwordError");
function isValidPassword(password) {
  const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{1,20}$/;
  return passw.test(String(password));
}
form2.addEventListener("submit", (e) => {
  e.preventDefault();
  const passwordValue = password.value.trim();

  if (!isValidPassword(passwordValue)) {
    passwordError.style.color = "red";
    passwordError.style.display = "inline";
    passwordError.textContent = "Password is required";
  } else {
    passwordError.style.display = "none";
  }
  if (passwordValue !== password2.value) {
    passwordError.style.color = "red";
    passwordError.style.display = "inline";
    passwordError.textContent = "passwords dont match";
  } else {
    passwordError.style.display = "none";
  }
});

