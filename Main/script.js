//password criteria prompts;
    //length
    //lowercase, 
    //uppercase, 
    //numeric, 
    //and/or special characters

//validate at least one char type selected

//character length prompt with numerical check and length check.
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
 if (!max) {
  max = min
  min = 0
  }
  var randNum = Math.random()
  return Math.floor(min*(1 - randNum) + randNum*max)
}


function genRandomVal(list) {
  return list [randomInt(list.length)]
}

function generatePassword() {
   var userInput = window.prompt("Password length? 8-128")
   var passwordLength = parseInt(userInput)
   if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
     window.alert("Please input a number between 8-128!")
     return
   }


  var numberPrompt = window.confirm("Include Numbers?")
  var symbolPrompt = window.confirm("Include Symbols?")
  var lowercasePrompt = window.confirm("Include lowercase letters?")
  var uppercasePrompt = window.confirm("Include UPPERCASE letters?")
 
  var numbers = ["0","1","2","3","4","5","6","7","8","9"]
  var symbols = ["!","£","$","%","^","&","*","(",")","+","@","#","?"]
  var lettersLwr = ["a","b","c","d","c","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var lettersUpr = []

  var userOptions = []

  for (var i = 0; i < lettersLwr.length; i++) {
  lettersUpr[i] = lettersLwr[i].toUpperCase()
  }

  if (numberPrompt) {
   userOptions.push(numbers)
  }

  if (symbolPrompt) {
   userOptions.push(symbols)
  }

  if (lowercasePrompt) {
   userOptions.push(lettersLwr)
  }

  if (uppercasePrompt) {
   userOptions.push(lettersUpr)
  }

  if (userOptions.length === 0) {
   window.alert("Please choose at least one variable!")
   return
  }

  var generatePassword = ""

  for (var i = 0; i < passwordLength; i++) {
   var randomVal = genRandomVal(userOptions)
   var randomChar = genRandomVal(randomVal)
   generatePassword += randomChar
  }

  return generatePassword
}
  





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
