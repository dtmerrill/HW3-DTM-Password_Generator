// Assignment Code

//array of characters
var specialChar = ["!","#","$",",","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"]
var numberChar = ["1","2","3","4","5","6","7","8","9","0"]
var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

function getPasswordOptions() {
  var getLength = parseInt(prompt("Enter a password length (between 8 and 128 characters)."))
  if (Number.isNaN(getLength)) {
    alert ("Password length must be provided as a number.")
    return null
  }
  if (getLength < 8) {
    alert ("Password must be between 8 and 128 characters.")
    return null
  }
  if (getLength > 128) {
    alert ("Password must be between 8 and 128 characters.")
    return null
  }
  var hasSpecialChar = confirm("Would you like to use special characters? (Click Okay)"); 
      // if (hasSpecialChar == true) {
      //   alert("Special Characters will be included."),
      // }    
      // else {
      //   alert("That's a no to special characters.")
      // }
  
  var hasNumberChar = confirm("Would you like to use numbers? (Click Okay)")
  var hasLowerChar = confirm("Would you like to use lowercase characters? (Click Okay)")
  var hasUpperChar = confirm("Would you like to use uppercase characters? (Click Okay)")

  var getPasswordOptions = {
    getLength: getLength, hasSpecialChar: hasSpecialChar, hasNumberChar: hasNumberChar, hasLowerChar: hasLowerChar, hasUpperChar: hasUpperChar 
  }
return getPasswordOptions;
}
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.getLength)
  var randomElement = arr[randomIndex]
  return randomElement
}
function generatePassword() {
  var passwordOptions = getPasswordOptions()
  var results = []
  var possibleCharacters = []
  var guaranteedCharacters = []
  
  if (passwordOptions.hasSpecialChar) {
    possibleCharacters = possibleCharacters.concat(specialChar)
    guaranteedCharacters.push(getRandom(specialChar))
  }
  if (passwordOptions.hasNumberChar) {
    possibleCharacters = possibleCharacters.concat(numberChar)
    guaranteedCharacters.push(getRandom(numberChar))
  }
  if (passwordOptions.hasLowerChar) {
    possibleCharacters = possibleCharacters.concat(lowerChar)
    guaranteedCharacters.push(getRandom(lowerChar))
  }
  if (passwordOptions.hasUpperChar) {
    possibleCharacters = possibleCharacters.concat(upperChar)
    guaranteedCharacters.push(getRandom(upperChar))
  }
  
  for (let i = 0; i < passwordOptions.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters)
    results.push (possibleCharacter)    
  }
  for (let i = 0; i < guaranteedCharacters.length; i++) {
    results[i] = guaranteedCharacters[i]

    
  }
  return results.join("")
}

// function testing() {
//   if (hasSpecialChar == true) {
//     console.log(specialChar)
//   }

//   if (hasNumberChar == true) {
//     console.log(numberChar)
//   }

//   if (hasLowerChar == true) {
//     console.log(lowerChar)
//   }

//   if (hasUpperChar == true) {
//     console.log(upperChar)
//   }
// };
var generateBtn = document.querySelector("#generate");


// var getLength = function() {
//   var pwLength = window.prompt("Enter a password length (between 8 and 128 characters).");
//   if (!pwLength) {
//     return;
//   }
// };
// var getLower = function() {
//   var pwLower = window.prompt("Do you wish to include lowercase letters? (Y/N)");
//   if (!pwLower) {
//     return;
//   }
// };
// var getUpper = function() {
//   var pwUpper = window.prompt("Do you wish to include uppercase letters? (Y/N)");
//   if (!pwUpper) {
//     return;
//   }
// };
// var getSpecial = function() {
//   var pwSpecial = window.prompt("Do you wish to include special characters? (Y/N)");
//   if (!pwSpecial) {
//     return;
//   }
// };




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

