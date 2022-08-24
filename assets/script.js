// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// global variables (consolidate? array?)
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numerals = "1234567890".split("");
var specChar = "!)*+,-./:;<=>?@][^_`{|}~".split("");
var passwordArray = [];
// passwordArray.length = passwordLength;

function getPassword() {
  return Math.floor(Math.random()*passwordArray.length);
}

passwordArray[52]

function generatePassword() {
  var passwordLength = window.prompt("How many characters will your password be?\nType a number 8 - 128...");

  if (!passwordLength) {
    return;
  }
  if (8 > passwordLength || 128 < passwordLength) {
      alert("Password length must be between 8 to 128 characters.");
      return generatePassword();
    }
  var userLower = confirm("Will you include lower case letters?\nSelect ok for yes, cancel for no.");

  var userUpper = confirm("Will you include UPPER case letters?\nSelect ok for yes, cancel for no.");

  var userNumber = confirm("Will you include numbers?\nSelect ok for yes, cancel for no.");

  var userSpecchar = confirm("Will you include special characters?\nSelect ok for yes, cancel for no.");

  if (!userLower && !userUpper && !userSpecchar && !userNumber){
    alert("Must choose at least one variable type.\nPlease try again.");
    return generatePassword();
  }
console
  if (userLower) {
    for (var i=0; i < lowerCase.length; i++){
      passwordArray.push(lowerCase[i]);
    } 
  }

  if (userUpper) {
    for (var i=0; i < upperCase.length; i++){
      passwordArray.push(upperCase[i]);
    } 
  }

  if (userNumber) {
    for (var i=0; i < numerals.length; i++){
      passwordArray.push(numerals[i]);
    } 
  }

  if (userSpecchar) {
    for (var i=0; i < specChar.length; i++){
      passwordArray.push(specChar[i]);
    } 
  }
    var password = '';
    for (var i=0; i< +passwordLength; i++){
      password += passwordArray[getPassword()]
    }

      return password;
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (!password) {
    console.log(password)
    return;
  } else {
  passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
