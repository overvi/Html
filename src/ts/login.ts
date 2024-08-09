const togglePassword = document.querySelector(".toggle-password")!;
const passwordInput = document.querySelector(
  ".password-input"
) as HTMLInputElement;

console.log(passwordInput, togglePassword);
togglePassword.addEventListener("click", () => {
  passwordInput.type = passwordInput.type == "text" ? "password" : "text";
});
