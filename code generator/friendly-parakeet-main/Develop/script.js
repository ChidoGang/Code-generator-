// Assignment code here
function generatePassword(){
    var charSet = " ";
    var genPassword = [];

    // Ask user how long they want to password to be
    do {
      var pLength = window.prompt("how long do you want the password to be");
    } while (pLength <8 || pLength >128 || isNaN(pLength))

    // Ask user if they want lower case characters
    var lowerCase = window.confirm("Do you want Lower case Characters");

    if (lowerCase ===true){
      charSet += "abcdefghijklmnopqrstuvwxyz";
    }

    // Ask user if they want upper case characters
    var upperCase = window.confirm("Do you want upper case Characters");

    if (upperCase ===true){
      charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    
    // Ask user if they want special characters
    var specialChar = window.confirm("Do you want special Characters");

    if (specialChar ===true){
      charSet += "+=!@#$%^&*()?<>";
    }

    // Ask user if they want numbers
    var numbers = window.confirm("Do you want Numbers");

    if (numbers ===true){
      charSet += "1234567890";
    }

    // generates the password
    for(let i = 0; i < pLength; i++) {
      genPassword += charSet[Math.floor(Math.random()*charSet.length)]
    }

    return genPassword;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
