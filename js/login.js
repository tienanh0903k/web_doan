var storedForms = JSON.parse(localStorage.getItem("storedForms"));
var registeredUser = storedForms[0].username;
var registeredPass = storedForms[0].password;


var loginForm = document.querySelector(".auth__form");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();


  var accountInput = document.querySelector('[name="customer_account"]');
  var passwordInput = document.querySelector('[name="customer_password"]');
  var account = accountInput.value.trim();
  var password = passwordInput.value.trim();


  if (account === registeredUser && password === registeredPass) {
    localStorage.setItem("currentUser", JSON.stringify(account));
    window.location.href = "index.html";
  } else if (account === registeredUser && password !== registeredPass) {
    alert("Sai mật khẩu!");
  } else {
    alert("Tài khoản không tồn tại!");
  }
});
