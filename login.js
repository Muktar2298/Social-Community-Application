// document.getElementById("signUpBtn").addEventListener("click", function () {
//   alert("Hello!");
// });

// ----Toggle SingUp & SignIn----//
document.getElementById("signUpNow").addEventListener("click", function () {
  const loginContainer = document.getElementById("login");
  const signUpContainer = document.getElementById("signup");
  if (loginContainer.style.visibility === "visible") {
    loginContainer.style.visibility = "hidden";
  } else {
    signUpContainer.style.visibility = "visible";
  }
});

document.getElementById("logInNow").addEventListener("click", function () {
  const loginContainer = document.getElementById("login");
  const signUpContainer = document.getElementById("signup");
  if (signUpContainer.style.visibility === "visible") {
    signUpContainer.style.visibility = "hidden";
  } else {
    loginContainer.style.visibility = "visible";
  }
});
