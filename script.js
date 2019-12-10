var name= 'Person In Need Of Password!';
alert ('Welcome' + name);
alert ('Enter a password between 8 and 128 characters');

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

// function to copy passwrod to clip board
function copyToClipboard(){

    document.getElementById("display").querySelector();

    document.execCommand("copy");

    alert("Password copied to clip board!");
}