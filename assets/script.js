// Assignment code here

// presented with prompts for password criteria
// need: click button event to prompt confirm windows
// need: confirm windows for: uppercase, lowercase, numbers, special characters
//    prompt: would you like to include uppercase characters > true/false
// need to define variables possible
// need: length entry prompt
//    enter variable between 8 - 128
// need: input validated with at least one character type selected
//    if all false, alert(pick at least one variable) (tick possible?)
//    password must be random from selected variables
// need: password generated once all prompts are answered
// need: password displayed, local storage

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// define variables (consolidate? array?)
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numerals = "1234567890";
var specCharacters = "!#$%&'()*+,-./:;<=>?@][^_`{|}~";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function() {
    var passwordLength = window.prompt("How many characters will your password be? Type a number 8 - 128...");

  if (!userChoice) {
    return;
  }
}
) 
