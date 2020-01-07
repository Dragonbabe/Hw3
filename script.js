
// Set my variables
var passwordLength;
var passwordCriteria;
var passwordCriteriaArr;
var wantSpecialChar = false
var wantNumberChar = false
var wantLowerChar = false
var wantUpperChar = false
var specialCharList = '!@#$%^&*()_+<>?';
var numberCharList = '1234567890';
var lowerCharList = 'abcdefghijklmnopqrstuvqrswxyz';
var upperCharlist = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var generate = document.getElementById('generate');
var userChoice;
generate.addEventListener('click', getInputs);

function getInputs() {


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

    
    userChoice = {
        wantLowerChar:  confirm('Would you like lower case characters?'),
        wantSpecialChar: confirm('Would you like special characters?'),
        wantNumberChar: confirm('Would you like numbers?'),
        wantUpperChar: confirm('Would you like upper case characters?'),

    };

    generatePassword()

}


function generatePassword() {
    console.log("User",userChoice, "\n Password Length", passwordLength)
     
    if(userChoice.wantLowerChar){


        
    }
}

function displayPassword() {
    
}