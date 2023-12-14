const edit_name = (<HTMLOutputElement>document.getElementById('name'));
const edit_email = (<HTMLOutputElement>document.getElementById('email'));
const edit_address = (<HTMLOutputElement>document.getElementById('address'));
const edit_phone = (<HTMLOutputElement>document.getElementById('phone'));
const edit_btn = (<HTMLOutputElement>document.getElementById('updateBook'));

const editString = window.location.search;
const editParams = new URLSearchParams(editString);
const geturlparam = editParams.get('id');
if(editParams.has('id')){
    var userData= JSON.parse(localStorage.getItem(editParams.get('id')))

    edit_name.value = userData.name;
    edit_email.value = userData.email;
    edit_address.value = userData.address;
    edit_phone.value = userData.phone;

    var nameCount=1, emailCount=1, addressCount=1, phoneCount=1;
    var count = Number(nameCount) + Number(emailCount) + Number(addressCount) + Number(phoneCount);

    document.getElementById('updateContact').addEventListener('submit', function(e) {
        e.preventDefault();
        var id = userData.id;
        var name = edit_name.value;
        var email = edit_email.value;
        var address = edit_address.value;
        var phone = edit_phone.value;
    
        const formData = {
            id: id,
            name: name,
            email: email,
            address: address,
            phone: phone
        }
    
        if(nameCount === 1 && emailCount === 1 && addressCount === 1 && phoneCount === 1){
            saveData(formData, id);
            location.reload();
        }
    });

    var inputKey = document.getElementsByTagName('input');
    var textareaKey = document.getElementsByTagName('textarea');

    for(var i = 0; i < inputKey.length; i++){
        inputKey[i].addEventListener('keyup', function(e) {
            if(nameCount === 1 && emailCount === 1 && addressCount === 1 && phoneCount ===1){
                edit_btn.style.opacity = "1";
                edit_btn.classList.add("btnHover");
            }else{
                edit_btn.style.opacity = "0.5";
                edit_btn.classList.remove("btnHover");
            }
        })
    }

    for(var i = 0; i < textareaKey.length; i++){
        textareaKey[i].addEventListener('keyup', function(e) {
            if(nameCount === 1 && emailCount === 1 && addressCount === 1 && phoneCount ===1){
                edit_btn.style.opacity = "1";
                edit_btn.classList.add("btnHover");
            }else{
                edit_btn.style.opacity = "0.5";
                edit_btn.classList.remove("btnHover");
            }
        })
    }

    document.getElementById('name').addEventListener('keyup', function(e) {
        if(edit_name.value !== ""){
            if(edit_name.value.length >= 2){
                nameCount = 1;
                nameErr.innerHTML = '';
            }else{
                edit_btn.style.opacity = "0.5";
                edit_btn.classList.remove("btnHover");
                nameCount = 0;
                nameErr.innerHTML = '<p class="text-red mt-2">This name contain only letters and 2 or more characters</p>';
            }
        }else{
            edit_btn.style.opacity = "0.5";
            edit_btn.classList.remove("btnHover");
            nameCount = 0;
            nameErr.innerHTML = '<p class="text-red mt-2">This name must not be empty!</p>';
        }
    });
    
    document.getElementById('email').addEventListener('keyup', function(e) {
        e.preventDefault();
        var validEmail = /[a-zA-Z0-9._]+@(gmail|yahoo|myyahoo|outlook|hotmail)+.[a-z-A-z]{2,}/.test(edit_email.value);
        if(edit_email.value !== ""){
            if(validEmail){
                emailCount = 1;
                emailErr.innerHTML = '';
            }else{
                edit_btn.style.opacity = "0.5";
                edit_btn.classList.remove("btnHover");
                emailCount = 0;
                emailErr.innerHTML = '<p class="text-red mt-2">This email address contain with @gmail, @yahoo, @myyahoo, @outlook, @hotmail</p>';
            }
        }else{
            edit_btn.style.opacity = "0.5";
            edit_btn.classList.remove("btnHover");
            emailCount = 0;
            emailErr.innerHTML = '<p class="text-red mt-2">This email address must not be empty!</p>';
        }
    });
    
    document.getElementById('address').addEventListener('keyup', function(e) {
        if(edit_address.value !== ""){
            if(edit_address.value.length >= 2){
                addressCount = 1;
                addressErr.innerHTML = '';
            }else{
                edit_btn.style.opacity = "0.5";
                edit_btn.classList.remove("btnHover");
                addressCount = 0;
                addressErr.innerHTML = '<p class="text-red mt-2">This address contain 2 or more characters</p>';
            }
        }else{
            edit_btn.style.opacity = "0.5";
            edit_btn.classList.remove("btnHover");
            addressCount = 0;
            addressErr.innerHTML = '<p class="text-red mt-2">This address must not be empty!</p>';
        }
    });
    
    document.getElementById('phone').addEventListener('keyup', function(e) {
        if(edit_phone.value !== ""){
            if(edit_phone.value.length >= 2){
                phoneCount = 1;
                phoneErr.innerHTML = '';
            }else{
                edit_btn.style.opacity = "0.5";
                edit_btn.classList.remove("btnHover");
                phoneCount = 0;
                phoneErr.innerHTML = '<p class="text-red mt-2">This phone number contain only number</p>';
            }
        }else{
            edit_btn.style.opacity = "0.5";
            edit_btn.classList.remove("btnHover");
            phoneCount = 0;
            phoneErr.innerHTML = '<p class="text-red mt-2">This phone number must not be empty!</p>';
        }
    });
}else{
    window.location.href = "index.html";
}