// Assignment code here

// presented with prompts for password criteria
// need: click button event to prompt confirm windows
// need: confirm windows for: uppercase, lowercase, numbers, special characters
//    prompt: would you like to include uppercase characters > true/false
// need to define variables possible
// need: length entry prompt
//    enter variable between 8 - 128
//! need: input validated with at least one character type selected
//    if all false, alert(pick at least one variable) (tick possible?)
//    password must be random from selected variables
//! need: password generated once all prompts are answered
//! need: password displayed, local storage

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// global variables (consolidate? array?)
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numerals = "1234567890".split("");
var specChar = "!)*+,-./:;<=>?@][^_`{|}~".split("");
var pwArray = []

// function generatePassword() {
  
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function() {
  var passwordLength = window.prompt("How many characters will your password be?\nType a number 8 - 128...");
  
  if (!passwordLength) {
    return;
  }

  if (8 > passwordLength || 128 < passwordLength) {
      alert("Password length must be between 8 to 128 characters.");
      return;
    }
  var userlow = confirm("Will you include lower case letters?\nSelect ok for yes, cancel for no.");

  var userup = confirm("Will you include UPPER case letters?\nSelect ok for yes, cancel for no.");

  var usernumber = confirm("Will you include numbers?\nSelect ok for yes, cancel for no.");

  var userspecchar = confirm("Will you include special characters?\nSelect ok for yes, cancel for no.");

  if (!userlow && !userup && !userspecchar){
    alert("Must choose at least one variable type.\nPlease try again.");
    return generatePassword();
    //must return to beginning 
  }

  if (userlow) {
    for (var i=0; i < lowerCase.length; i++){
      pwArray.push(lowerCase[i]);
    } 
  }

  if (userup) {
    for (var i=0; i < upperCase.length; i++){
      pwArray.push(upperCase[i]);
    } 
  }

  if (usernumber) {
    for (var i=0; i < numerals.length; i++){
      pwArray.push(numerals[i]);
    } 
  }

  if (userspecchar) {
    for (var i=0; i < specChar.length; i++){
      pwArray.push(specChar[i]);
    } 
  }

  console.log(pwArray)
}
) 
