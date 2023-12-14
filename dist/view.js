var viewString = window.location.search;
var viewParams = new URLSearchParams(viewString);
var info_name = document.getElementById('info_name');
var info_email = document.getElementById('info_email');
var info_address = document.getElementById('info_address');
var info_phone = document.getElementById('info_phone');
if (viewParams.has('id')) {
    var userData = JSON.parse(localStorage.getItem(viewParams.get('id')));
    info_name.innerText = userData.name;
    info_email.innerText = userData.email;
    info_address.innerText = userData.address;
    info_phone.innerText = userData.phone;
}
else {
    window.location.href = "index.html";
}
