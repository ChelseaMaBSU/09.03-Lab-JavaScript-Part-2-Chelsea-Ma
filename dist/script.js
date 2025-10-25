function isStrongPassword(password) {
  const hasMinLength = password.length >= 8;
  const doesNotContainPassword = !password.toLowerCase().includes("password");
  const hasUppercase = /[A-Z]/.test(password);

  return hasMinLength && doesNotContainPassword && hasUppercase;
}

function checkPassword(event) {
  event.preventDefault(); 

  const passwordInput = document.getElementById("password").value;

  if (isStrongPassword(passwordInput)) {
    alert("Password is strong.");
  } else {
    alert("Password is weak.");
  }
}

function togglePassword() {
  const passwordField = document.getElementById("password");
  const toggleBtn = document.querySelector(".toggle-password");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleBtn.textContent = "👁️‍🗨️"; // "hide" icon
  } else {
    passwordField.type = "password";
    toggleBtn.textContent = "👁️‍🗨️"; // "show" icon
  }
}
