// Assignment code here

//presented with prompts for password criteria
//need: click button event to prompt confirm windows
//need: confirm windows for: uppercase, lowercase, numbers, special characters
//need: length entry prompt
//need: input validated with at least one character type selected
//need: password generated once all prompts are answered
//need: password displayed, locals storage

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
