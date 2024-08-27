const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

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
