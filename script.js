let email = document.querySelector("#email");
let password = document.querySelector("#password");
let emailError = document.querySelector("#emailError");
let passwordError = document.querySelector("#passwordError");
let resultMsg = document.querySelector("#resultMsg");
let form = document.querySelector("form");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//add submit event on the form 
form.addEventListener("submit", function(dets){
dets.preventDefault();

//call validInput function inside final submission if dets are correct
let isValid;
isValid = validateInputs();

if(isValid){
    resultMsg.textContent = "Everything is correct";
}
});

let icon = document.querySelector(".open-eye");
icon.addEventListener("click",function(dets){
    if(password.type === "password"){
    password.type = "text";
     icon.classList.remove("ri-eye-line");
     icon.classList.add("ri-eye-off-line");
    }
    else{
     password.type = "password";  
     icon.classList.add("ri-eye-line");
     icon.classList.remove("ri-eye-off-line");
    }
});
//function
let validateInputs = () =>{
//check according to regex answer will be true or false?
let emailans = emailRegex.test(email.value); 
let passwordans = passwordRegex.test(password.value);
//set isValid default true 
let isValid = true;
//refres errors and result
emailError.textContent = "";
passwordError.textContent = "";
resultMsg.textContent = "";
//empty email
if(email.value === ""){
   emailError.textContent = "email is required";
   email.style.borderColor = "red";
   emailError.style.display = "initial";
   isValid = false;
}
//if email is true according to regex
else if(!emailans){
   emailError.textContent = "email is incorrect";
   email.style.borderColor = "red";
   emailError.style.display = "initial";
   isValid = false;
}
//otherwise everything is true
else{
    emailError.style.display = "none";
     email.style.borderColor = "green";
}
//empty password
if(password.value === ""){
    passwordError.textContent = "password is required";
    password.style.borderColor = "red";
    passwordError.style.display = "initial";  
    isValid = false;
}
//if password is true according to regex
else if(!passwordans){
  passwordError.textContent = "password is incorrect";
  password.style.borderColor = "red";
  passwordError.style.display = "initial";  
  isValid = false;
}
//otherwise everything is true
else{
    passwordError.style.display = "none";  
    password.style.borderColor = "green";
}
//at the end function can return true or false if everything is correct then form will be submitted
return isValid;
}
//call function inside the email input
email.addEventListener("input", function(){
    validateInputs();
});
//call function inside the password input
password.addEventListener("input",function(){
    validateInputs();
});