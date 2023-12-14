const viewString = window.location.search;
const viewParams = new URLSearchParams(viewString);

const info_name = (<HTMLSpanElement>document.getElementById('info_name'));
const info_email = (<HTMLSpanElement>document.getElementById('info_email'));
const info_address = (<HTMLSpanElement>document.getElementById('info_address'));
const info_phone = (<HTMLSpanElement>document.getElementById('info_phone'));
if(viewParams.has('id')){
    var userData= JSON.parse(localStorage.getItem(viewParams.get('id')))
    info_name.innerText = userData.name
    info_email.innerText = userData.email
    info_address.innerText = userData.address
    info_phone.innerText = userData.phone
}else{
    window.location.href = "index.html";
}