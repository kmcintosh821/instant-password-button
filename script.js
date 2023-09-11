// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Establishing all variables for the primary function.
  var characters = "";
  var output = "";
  var lows = confirm("Does your password require lowercase letters?");
  console.log("lowercases = " + lows);
  var caps = confirm("Does your password require capital letters?");
  console.log("capitals = " + caps);
  var nums = confirm("Does your password require numbers?");
  console.log("numbers = " + nums);
  var spec = confirm("Does your password require special characters?");
  console.log("specials = " + spec);

  if (lows + caps + nums + spec == 0) {
    
    alert ("At least one character type is required, please try again.");

  } else { // The user is not locked into a loop if they deliberately choose "cancel" for all four character types

    var passlength = tryLength() // Separated into its own function
  
    if (lows) {
      characters += "qwertyuiopasdfghjklzxcvbnm";
    }
    if (caps) {
      characters += "QWERTYUIOPASDFGHJKLZXCVBNM";
    }
    if (nums) {
      characters += "1234567890";
    }
    if (spec) {
      characters += "!@#$%^&*()_-+={[}]|:;<,>.?/";
    }
  
    console.log("character list: " + characters)
  
    for (let x = 0; x < passlength; x++) {
      index = Math.floor(Math.random() * characters.length);
      output += characters[index];
    }
    return output;

  }
}

// Continue asking for length of password until an acceptable value is given
function tryLength() {
  var tryAgain = 1;
  var response = parseInt(prompt("How long will it be? (Between 8-128)"));
  for (let x = 0; x < tryAgain; x++) {
    if (8 > response || response > 128) {
      alert("Invalid, please try again.");
      tryAgain++
      response = parseInt(prompt("How long will it be? (Between 8-128)"));
    }
  }

  console.log("number of characters: " + response);
  return response;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log("password: " + password)

  if (password != undefined) {
    passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
