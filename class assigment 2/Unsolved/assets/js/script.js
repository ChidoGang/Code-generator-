var emailInput = document.querySelector('#email');
var passwordInput = document.querySelector('#password');
var signUpButton = document.querySelector('#sign-up');
var msgDiv = document.querySelector('#msg');
var userEmailSpan = document.querySelector('#user-email');
var userPasswordSpan = document.querySelector('#user-password');

function renderLastRegistered() {
  // TODO: Retrieve the last email and password from localStorage
  var email = localStorage.getItem("emailInput")
   var email = localStorage.getItem("passwordInput")
  localStorage.getItem("emailInput");
  localStorage.getItem("passwordInput");
  // TODO: If they are null, return early from this function
  if(email === null || password === null);
  // TODO: Otherwise set the text of the 'userEmailSpan' and 'userPasswordSpan' to the corresponding values from localStorage
}
  return;
}
function renderLastRegistered(); 
{
  userEmailSpan.textContent = email;
  userPasswordSpan.textContent = password;
}


renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
}

signUpButton.addEventListener('click', function(event) {
  event.preventDefault();

  var email = document.querySelector('#email').value;
  var password = document.querySelector('#password').value;

  if (email === '') {
    displayMessage('error', 'Email cannot be blank');
  } else if (password === '') {
    displayMessage('error', 'Password cannot be blank');
  } else {
    displayMessage('success', 'Registered successfully');

    // TODO: Save email and password to localStorage
    localStorage.setItem("emailInput",email ):
    localStorage.setItem("passwordInput", password);
    // TODO: Render the last registered email and password
    function renderLastRegistered();
  }
});
