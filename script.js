
// Set my variables
var passwordLength;
var passwordCriteria;
var passwordCriteriaArr;
var wantSpecialChar = false
var wantNumberChar = false
var wantLowerCase = false
var wantUpperCase = false
var specialCharList = '!@#$%^&*()_+<>?';
var numberCharList = '1234567890';
var lowerCharList = 'abcdefghijklmnopqrstuvqrswxyz';
var upperCharlst = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';


while (passwordLength !== null) {
    // prompt user to enter numbers with this criteria
    passwordLength = prompt('Enter a password length between 8 and 128 characters');
    passwordLength = parseInt(passwordLength);
    
    if (isNaN(passwordLength)) {
        alert("Please enter a valid Number");
    }
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Please enter a number between 8 and 128");
    }
    if (passwordLength >= 8 && passwordLength <= 128) {
        break;
    }
}

while (passwordCriteria !== null) {

    passwordCriteria = prompt('password criteria: s is for special characters, n is for numbers, l is for lower case characters, u is for upper case characters');
    if (passwordCriteria !== null) {
        passwordCriteriaArr = passwordCriteria.split("");
    }


    for (var i = 0; i < passwordCriteriaArr.length; i = i + 1) {
        if (passwordCriteriaArr[i].includes('s')) {
            wantSpecialChar = true;
        }
        if (passwordCriteriaArr[i].includes('n')) {
            wantNumberChar = true;
        }
        if (passwordCriteriaArr[i].includes('l')) {
            wantLowerCase = true;
        }
        if (passwordCriteriaArr[i].includes('u')) {
            wantUpperCase = true;
        }
    }

    if (wantSpecialChar === true || wantNumberChar === true || wantLowerCase === true || wantUpperCase === true); {
        break
    }
    let values ="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$$%&*()_+ ." .split('');



}





/*
function generate(){

//Possible password values
let values ="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$$%&*()_+";

let password = "";

//create for loop to choose password characters
for (var i = 0; i <= complexity; i=i+1){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
}

// Add password to textbox/display area
document.getElementByid('display').values = password;

// add password to previously generated password section
document.getElementById("lastNums").innerHTML += password + "<br />";

}

// function to copy password to clip board
function copyToClipboard(){

    document.getElementById("display").querySelector();

    document.execCommand("copy");

    alert("Password copied to clip board!");
}
*/
 