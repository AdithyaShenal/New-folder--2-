// const sign_in_btn = document.querySelector("#sign-in-btn");
// const sign_up_btn = document.querySelector("#sign-up-btn");
// const container = document.querySelector(".container");

// sign_up_btn.addEventListener("click", () => {
//   container.classList.add("sign-up-mode");
// });

// sign_in_btn.addEventListener("click", () => {
//   container.classList.remove("sign-up-mode");
// });

// function validation() {
//   let userName = document.getElementById("user").value;
//   let passWord = document.getElementById("pass").value;

//   if (userName === "adi" && passWord === "123") {
//     // Correct username and password
//     // window.location.href = "../user_dashboard.html";
//     document.getElementById("form").action = "../index_logged.html";
//     return true;
//   } else {
//     // Incorrect username or password
//     document.getElementById("error-message").innerText =
//       "Username or Password incorrect";
//     return false;
//   }
// }

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

container.classList.remove("sign-up-mode");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function validation() {
  let userName = document.getElementById("user").value;
  let passWord = document.getElementById("pass").value;

  if (userName === "adi" && passWord === "123") {
    // Correct username and password
    // window.location.href = "../user_dashboard.html";
    document.getElementById("form").action = "../index_logged.html";
    return true;
  } else {
    // Incorrect username or password
    document.getElementById("error-message").innerText =
      "Username or Password incorrect";
    return false;
  }
}

function validateSignup() {
  // Get input values
  var username = document.getElementById("username1").value;
  var email = document.getElementById("email1").value;
  var password = document.getElementById("password1").value;

  // Check if the email address is valid using a simple pattern
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (username === "") {
    // alert("Please enter a username.");
    //errorMsg1.innerHTML += '<p>Please enter your username !</p>';
    document.getElementById("errorMsg1").innerText =
      "Please enter your username !";
    return false;
  } else if (email === "") {
    // alert("Please enter an email address.");
    //errorMsg1.innerHTML += '<p>Please enter an email address !</p>'
    document.getElementById("errorMsg1").innerText =
      "Please enter an email address !";
    return false;
  } else if (!emailPattern.test(email)) {
    // alert("Please enter a valid email address.");
    //errorMsg1.innerHTML += '<p>Please enter a valid email address !</p>'

    document.getElementById("errorMsg1").innerText =
      "Please enter a valid email address !";

    return false;
  } else if (password === "") {
    // alert("Please enter a password.");
    //errorMsg1.innerHTML += '<p>Please enter your password !</p>'
    document.getElementById("errorMsg1").innerText =
      "Please enter your password !";

    return false;
  } else {
    window.location.href = "login.html";

    return true;
  }
}
