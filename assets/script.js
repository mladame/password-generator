// Assignment code here

// presented with prompts for password criteria
// need: click button event to prompt confirm windows
// need: confirm windows for: uppercase, lowercase, numbers, special characters
//    prompt: would you like to include uppercase characters > true/false
// need to define variables possible
// need: length entry prompt
//    enter variable between 8 - 128
// need: input validated with at least one character type selected
//    if all false, alert(pick at least one variable)
//    password must be random from selected variables
//! need: password generated once all prompts are answered
//    apply password length to comoposed array of selected variables
//    make array randomly select from passwordArray into password
//! need: password displayed, local storage?
//    will display once generatePassword() is complete

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// global variables (consolidate? array?)
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numerals = "1234567890".split("");
var specChar = "!)*+,-./:;<=>?@][^_`{|}~".split("");
var passwordArray = [];
// passwordArray.length = passwordLength;

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

  if (!userLower && !userUpper && !userSpecchar){
    alert("Must choose at least one variable type.\nPlease try again.");
    return generatePassword();
  }

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

  // var password = Array.from(Math.floor(Math.random() * passwordArray.passwordLength));
    let password = '';
    for (var i=0; i< passwordLength; i++){
      // password =+ index + passwordArray[i] + "";
      var index = Math.floor(Math.random() * passwordArray.length);
      password = passwordArray[index].concat(0, passwordLength.value);
      // var password = passwordArray[index] + "" + passwordArray[i];
    }
    //   var password = Array(passwordLength).fill(passwordArray).map(function(x) { return x[Math.floor(Math.random() * passwordArray.length)] }).join('');
    // }
    // var index = Math.floor(Math.random() * passwordArray.length);
    // passwordArray.forEach(myFunction);
    // // password = passwordArray[index];

    // function myFunction(value, index, passwordLength) {
    //   password += passwordArray;
    // }
    // for (let i=0; i < passwordLength.length; i++){
    //   password = String.fromCharCode(Math.floor(Math.random()*passwordArray.length*n));
    //   passwordArray.forEach(myFunction)

    //   });
    // }
    // return password;
  // }

  console.log(password);
  }
  // for (let i =1; i< passwordLength; i++){
  //   
  //   var 
  


  // for (var i=0; i<)
// make iteration of password output, consolidate
  // 

  // var index = Array(passwordArray).fill(0, passwordLength).map(function(x) { 
  //  return x[Math.floor(Math.random() * x.length)] }).join('');

  // do {
    
  // }
  
// password array filled with chosen variables
// lines 81-81, index outputs random variable from passwordArray
// generate new password, fill with random variables from index up to passwordLength



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
