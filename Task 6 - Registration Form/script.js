const emailInput = document.getElementById("email");
emailInput.addEventListener('input', function(event) {
    if (!isValidEmail(emailInput.value)) {
      emailInput.setCustomValidity('Invalid email address');
    } else {
      emailInput.setCustomValidity('');
    }
  });

  function isValidEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }



function validpassword(){
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm_password").value;
    console.log(password,confirm_password);
    let message = document.getElementById("message");

    if(password.length !=0){
        if(password == confirm_password){
            message.textContent = "Password Match";
        }

        else{
            message.textContent = "Password Don't Match";
        }
    }

    else{
        alert("Password Can't Empty!");
        message.textContent="";
    }
}


