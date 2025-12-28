document.getElementById( "form-validate" ).addEventListener( 'submit', function(event){

    event.preventDefault();

    let userName = document.getElementById("userName").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("cpassword").value.trim();
    
    let name= /^[a-zA-Z]+ [a-zA-z]+$/;
    let pmail=/^[a-z0-9]+@[a-z]{4,}\.[a-z]{2,}$/;
    let valid=false;
    
    if(userName === ""){
    document.getElementById("name-error").innerHTML = "*Name is Required";
    valid=false;
    }
    else if(!name.test(userName)){
    document.getElementById("name-error").innerHTML = "*Enter a valid name"
    valid=false;;
    }
    else if(name.test(userName)){
    document.getElementById("name-error").innerHTML = "";
    valid=true;
    }

    if(email===""){
    document.getElementById("mail-error").innerHTML = "*Email is Required";
    valid=false;
    }
    else if(!pmail.test(email)){
    document.getElementById("mail-error").innerHTML = "*Enter a valid email";
    valid=false;
    }
    else if(pmail.test(email)){
    document.getElementById("mail-error").innerHTML = "";
    valid=true;
    }

    if(password===""){
    document.getElementById("password-error").innerHTML = "*Password is Required";
    valid=false;
    }
    else if(!(password.length>3 && password.length<10)){
    document.getElementById("password-error").innerHTML = "*Enter a valid Password between 3 to 10 character";
    valid=false;
    }
    else if(password.length>3 && password.length<10){
    document.getElementById("password-error").innerHTML = "";
    valid=true;
    }
    
    if(confirmPassword===""){
    document.getElementById("cpassword-error").innerHTML = "*Confirm Password is Required";
    valid=false;
    }
    else if(confirmPassword===password){
    document.getElementById("cpassword-error").innerHTML = "";
    valid=true;
    }
    else if(confirmPassword!==password){
    document.getElementById("cpassword-error").innerHTML = "*Password Mismatch";
    valid=false;

    }
    if(valid)
    {
        alert(`hi ${userName},you have successfully completed the validation`);
    }
})