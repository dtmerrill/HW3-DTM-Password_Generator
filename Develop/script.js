// Assignment Code

var generateBtn = document.querySelector("#generate");


var getLength = function() {
  var pwLength = window.prompt("Enter a password length (between 8 and 128 characters).");
  if (!pwLength) {
    return;
  }
};
var getLower = function() {
  var pwLower = window.prompt("Do you wish to include lowercase letters? (Y/N)");
  if (!pwLower) {
    return;
  }
};
var getUpper = function() {
  var pwUpper = window.prompt("Do you wish to include uppercase letters? (Y/N)");
  if (!pwUpper) {
    return;
  }
};
var getSpecial = function() {
  var pwSpecial = window.prompt("Do you wish to include special characters? (Y/N)");
  if (!pwSpecial) {
    return;
  }
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
