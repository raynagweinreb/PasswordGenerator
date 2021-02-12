// Assignment Code
// User input variables: 
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
// Password values
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upper= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

//add choices variable 
var choices; 
var generateBtn = document.querySelector("#generate");
//var passwordText = document.querySelector("#password");
//var pass = writePassword();
// Write password to the #password input
function writePassword() {

  // User questions
  userInput = parseInt(prompt('Please choose between 8 and 128 characters for the length of your password'));

  // if statement if use selects out of the range

  if (!userInput){
    alert('Please enter a value between 8 and 128');
  } else if (userInput <8|| enter > 128){
    userInput = parseInt(prompt('Please enter a value between 8 and 128'));
  } else {
    // prompt the rest of the questions 
    confirmNumber = confirm('Do you want your password to contain numbers?');
    confirmCharacter = confirm('Do you want your password to contain special characters');
    confirmUppercase = confirm('Do you want your password to contain Uppercase Letters');
    confirmLowercase = confirm('Do you want your password to contain Lowercase letters?');
  };
  // 4 negative options 
  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase){
    choices = alert('You must choose at least one choice');
  } 

  // 4 confirmations 
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
    choices = character.concat(number, upper, lower);
  }
  // 3 confirmations 
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number,lower );
  }
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = character.concat(number, upper);
  }
  else if (confirmCharacter && confirmLowercase, confirmUppercase) {
    choices = character.concat(lower, upper);
  }
  else if ( confirmLower && confirmNumber && confirmUppercase) {
    choices = lower.concat(number, upper);
  }

  // 2 confirmations
else if (confirmCharacter && confirmNumber) {
  choices = character.conccat(number);
}
else if (confirmCharacter && confirmLowercase) {
  choices = character.concat(lower);
}
else if (confirmCharacter && confirmUppercase) {
  choices = character.concat(upper);
}
else if (confirmNumber && confirmLowercase){
  choices = number.concat(lower);
}
else if (confirmNumber && confirmUppercase){
  choices = number.concat(upper);
}
else if (confirmLowercase && confirmUppercase) {
  choices = lower.concat(upper);
}
// 1 confirm 
else if (confirmCharacter) {
  choices = (character);
}
else if (confirmNumber) {
  choices = (number) ; 
}
else if (confirmLowercase){
  choices = (lower) ; 
}
else if (confirmUppercase) {
  choices = (upper) ;
}



var passwordText = document.querySelector("#password");
var password = [];
//random variable selection 
for (var i = 0; i < userInput; i++) {
  var selectChoices = choices[Math.floor(Math.random()* choices.length)];
  password.push(selectChoices);
}
passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
