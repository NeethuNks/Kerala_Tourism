let signupEmail=document.getElementById("signupEmail");
let emailSignupError=document.getElementById("emailSignupError");
let emailRegexp=/^([\w\-.]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;   
let mobileNumber=document.getElementById("mobileNumber");
let mobileError=document.getElementById("mobileError");
let numberRegexp=/^([0-9]{3})([- \.]?)([0-9]{3})([- \.]?)([0-9]{4})$/;
let password=document.getElementById("password");
let pwdError=document.getElementById("pwdError");
let pwdStrength=document.getElementById("pwdStrength");
let pwdRegexp=/((?=.*[A-Z]+)(?=.*[a-z]+)(?=.*[0-9]+))/ ;
let confPwd=document.getElementById("confPwd");
let confError=document.getElementById("confError");
let loginEmail=document.getElementById("loginEmail");
let loginEmailError=document.getElementById("loginEmailError");

function validSignupEmail(){
    
    if(emailRegexp.test(signupEmail.value)){
        emailSignupError.innerHTML="";
        signupEmail.style.border="";
        return true;
    }
    else{
        emailSignupError.innerHTML="Invalid Format! Please re-enter email address";
        signupEmail.style.border="red 1px solid";
        return false;
    }

}
 function validNumber(){
    if(numberRegexp.test(mobileNumber.value)){
        mobileError.innerHTML="";
        mobileNumber.style.border="";
        return true;
    }
    else{
        mobileError.innerHTML="Invalid Format! Please re-enter mobile number";
        mobileNumber.style.border="red 1px solid";
        return false;
    }
}
function validPassword(){
    if(pwdRegexp.test(password.value) && password.value.length>=8){
        pwdError.innerHTML="";
        password.style.border="";
        return true;
    }
    else{
        pwdError.innerHTML="Password must contain a minimum of 8 characters with atleast one number , one uppercase and one lowercase letter";
        password.style.border="red 1px solid";
        return false;
    }
    
}
function passStrength(){
    if(password.value.length<=9){
        password.style.border="red 1px solid";
        pwdStrength.style.color="red";
        pwdStrength.innerHTML="Weak Password!";
    }
    else if(password.value.length>9 && password.value.length<=12){
        password.style.border="orange 1px solid";
        pwdStrength.style.color="orange";
        pwdStrength.innerHTML="Medium Password!";
    }
    else if(password.value.length>12){
        password.style.border="green 1px solid";
        pwdStrength.style.color="green";
        pwdStrength.innerHTML="Strong Password!";
    }
}
function validConfPwd(){
    if(confPwd.value==password.value){
        confError.innerHTML="Password match";
        confPwd.style.border="";
        return true;
    }
    else{
        confError.innerHTML="Password don't match";
        confPwd.style.border="red 1px solid";
        return false;
    }
}
function validLogin(){
    if(emailRegexp.test(loginEmail.value)){
        loginEmailError.innerHTML="";
        loginEmail.style.border="";
        return true;
    }
    else{
        loginEmailError.innerHTML="Invalid Format! Please re-enter email address";
        loginEmail.style.border="red 1px solid";
        return false;
    }
}



function validate(){
    let a=validSignupEmail();
    let b=validNumber();
    let c=validPassword();
    let d=validConfPwd();

    if(a && b && c && d)
        return true;
    else
        return false
    
}