document.getElementById("btn-submit").addEventListener("click", function () {
  const userEmail = document.getElementById("user-email");
  const email = userEmail.value;
  //   userEmail.value = "";
  const userPassword = document.getElementById("user-password");
  const password = userPassword.value;
  console.log(email, password);

  if (email === "child@father.com" && password === "children") {
    window.location.href = "bank.html";
  } else {
    console.log("invalid");
  }
});
