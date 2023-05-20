// const loginBtn = document.getElementById("login_btn");
// const loginEmail = document.getElementById("login-email").value;
// const loginPass = document.getElementById("login_pass").value;
// const checkPass = document.getElementById("checkpass");




const registerBtn = document.getElementById("register_btn");
registerBtn.addEventListener("click", function signUp(e){
    e.preventDefault();
    const registerName = document.getElementById("register_name").value;
// console.log(registerName)
const registerEmail = document.getElementById("register_email").value;
// console.log(registerEmail)
const registerPass = document.getElementById("register_pass").value;
const registerConfirmPass = document.getElementById("registe_confirm_pass").value;


if(registerName != "" && registerEmail != "" && registerPass != "" && registerConfirmPass){
  alert("your register has been successful, now you can login");
  // location = "index.html";
  var user = {
    name: registerName,
    email: registerEmail,
    password: registerPass,
    confirmPassword: registerConfirmPass
  };
  console.log(user);
  localStorage.setItem("user", JSON.stringify(user));
}
  // window.location.href="www.google.com";

});


// loginBtn.addEventListener("click", (e)=>{
//     e.preventDefault();
//   const userData=JSON.parse(localStorage.getItem("data"));
//   if(loginEmail == userData.registerEmail && loginPass == userData.registerPass){
//     window.location.href="www.google.com";
//   }
//   else{
//     checkPass.innerText = "Wrong Password";
//   }
// })