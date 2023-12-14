var alpha = "[A-Za-z ]";
var numeric = "[0-9]";
var alphanumeric = "[A-Za-z0-9 -#@.,]";
var date = "[0-9/ ]";
function validateKeypress(event, validChars) {
    var validChar = new RegExp(validChars);
    var keyChar = String.fromCharCode(event.which || event.keyCode);
    return validChar.test(keyChar) ? keyChar : false;
}
