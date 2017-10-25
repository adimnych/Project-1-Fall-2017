/*this is for when they click the submit button*/
function button() {
alert("GREAT JAZZ PLAYLISTS ON THE WAY!");
return true;
}
/*this is when the click in the typing mode*/
function highlight(clicker){
clicker.style.background = "blue";
}
/*this is to return then given in all lowercase letters */
function next() {
var fnam= document.getElementById("first-name");
first-name.value = first-name.value.toLowerCase();

var lnam= document.getElementById("last-name");
last-name.value = last-name.value.toLowerCase();

var adr= document.getElementById("email");
email.value = email.value.toLowerCase();

var user-name= document.getElementById("user-name");
user-name.value = user-name.value.toLowerCase();

var password= document.getElementById("password");
password.value = password.value.toLowerCase();
}


