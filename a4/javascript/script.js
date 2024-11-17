function validateForm(){
//1) create a variable to control status of each field. Assume that they are not valid
var validFirstname=false;

//2) create variables to read the values from html text inputs
var Firstname = document.getElementById("firstname").value;

//3) do the validation
if (Firstname==="null" || Firstname==="" || Firstname.length > 20)
    errorMessages += "<p>First name is required and cannot be greater than 20 characters</p>";
else
   validFirstname = true;

//4) send error messages 
document.getElementById("errorMessages").innerHTML = errorMessages;

//5) return the status of each field
return (validFirstname);
}

function validateForm(){
//1) Create variable
var validLastname=false;

//2) read value from HTML
var Lastname = document.getElementById("lastname").value;

//3) Do validation
if (Lastname==="null" || Lastname==="" || Lastname.length > 50)
    errorMessages += "<p>Last name is required and cannot be greater than 50 characters</p>";
else
   validFirstname = true;

//4) Send error message to HMTL
document.getElementById("errorMessages").innerHTML = errorMessages;  

//5) return status of each field
return (validFirstname && validLastname);
  
}
