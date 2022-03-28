// The Password generator will provide a password with 8-50  characters based on criteria the user specifies.

//Assignment Code + Event Listener to prompt questions when button pushed
const generateButton = document.getElementById("generate")
generateButton.addEventListener('click', writePassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Various Arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration 
var confirmLength = "";
var confirmSpecialChar;
var confirmNumber;
var confirmUpperCase;
var confirmLowerCase;

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {

    var confirmLength = (prompt("Please enter the number of characters you want for you new password?  It must be more than 8 but less than 128."));
   // Loop if answer is outside the parameters 
  while(confirmLength <= 8 || confirmLength >= 128) {
    alert("Password length must be between 8-128 characters Try again");
  
    var confirmLength = (prompt("How many characters would you like your password to contain?"));
    
    // Determine parameters of password 
    var confirmSpecialChar = confirm("Click OK to confirm if you would like to include special characters");

    var confirmNumber = confirm("Click OK to confirm if you would like to include numeric characters"); 

    var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");

    var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");



      // Loop if answer is outside the parameters 
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialChar === false && confirmNumber === false) {
        alert("You must choose at least one parameter");

        var confirmSpecialChar = confirm("Click OK to confirm if you would like to include special characters");

        var confirmNumber = confirm("Click OK to confirm if you would like to include numeric characters");  

        var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");

        var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");   
  }};
  // Generator functions**
  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random()* 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random()* specialCharacters.length )]
    }

};
      // Assign an action to the password parameters 
      var passwordCharacters = []
      
    if (confirmSpecialChar) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumber) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(lowerCase)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(upperCase)
    }


      // Empty string to be filled based on for loop selecting random characters from the array
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
    }

