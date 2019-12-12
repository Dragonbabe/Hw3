function generate(){
    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var symbols = '!@#$%^&*()_+';

var all = uppercase + lowercase + numbers + symbols;

var password = '';

for (var index = 0; index < length; index++) {
    var character = Math.floor(Math.random() * all.length);
    password += all.substring(character, character +1);
}

return password;
}















