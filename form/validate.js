document.addEventListener('DOMContentLoaded', init, false);

function init()
{
    const form = document.getElementById('form');
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const userName = document.getElementById("userName");
    const password = document.getElementById("password");
    const confPassword = document.getElementById("confPassword");
    const email =  document.getElementById("email");
    const phoneNum = document.getElementById("phoneNum")

    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        checkInputs();
    });

    phoneNum.addEventListener("input", allowOnlyDigits);
};


function allowOnlyDigits() {  
    if (this.validity.valid) {
      this.setAttribute('current-value', this.value.replace(/[^\d]/g, ""));
    }
    this.value = this.getAttribute('current-value');
  }


function checkInputs() {
    const firstNameVal = firstName.value;
    const lastNameVal = lastName.value;
    const userNameVal = userName.value;
    const passwordVal = password.value;
    const confPasswordVal = confPassword.value;
    const emailVal = email.value;

    //check First Name
    if(firstNameVal == '')
    {
        setErrorFor(firstName, "Name Cannot be Blank");
    }
    else
    {
        setSuccessFor(firstName);
    }

    //Check Last Name
    if(lastNameVal == '')
    {
        setErrorFor(lastName, "Name Cannot be Blank");
    }
    else
    {
        setSuccessFor(lastName);
    }

    //Check Last Name
    if(userNameVal == '')
    {
        setErrorFor(userName, "User Name Cannot be Blank");
    }
    else
    {
        setSuccessFor(userName);
    }

    //check Password Policy
    if(!passwordPolicy(passwordVal))
    {
        setErrorFor(password, "Password must be min 8 chars, ");
    }
    else
    {
        setSuccessFor(password);
    }

    //confirm Password
    if(!confirmPassword(passwordVal, confPasswordVal ) )
    {
        setErrorFor(confPassword, "Password Did not Match..");
    }
    else
    {
        setSuccessFor(confPassword);
    }

    //validate Email
    if(!validateEmail(emailVal))
    {
        setErrorFor(email, "Enter a Valid Email Address");
    }
    else
    {
        setSuccessFor(email);
    }
}

function setErrorFor(input, message) 
{
    alert(message);
    const input_feild = input.parentElement;
    input_feild.className = "input_field error";
}

function setSuccessFor(input) 
{
    const input_feild = input.parentElement;
    input_feild.className = "input_field success";
}

function passwordPolicy(passwd) 
{
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(passwd);
}

function confirmPassword(passwd, confPasswd) 
{
    return passwd == confPasswd;
}

function validateEmail(emailV) 
{
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailV);
}
