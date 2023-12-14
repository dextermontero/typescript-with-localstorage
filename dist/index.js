var input_name = document.getElementById('name');
var input_email = document.getElementById('email');
var input_address = document.getElementById('address');
var input_phone = document.getElementById('phone');
var input_btn = document.getElementById('createBook');
var nameErr = document.getElementById('nameErr');
var emailErr = document.getElementById('emailErr');
var addressErr = document.getElementById('addressErr');
var phoneErr = document.getElementById('phoneErr');
var btnErr = document.getElementById('btnErr');
var nc = 0, ec = 0, ac = 0, pc = 0;
document.getElementById('createContacts').addEventListener('submit', function (e) {
    e.preventDefault();
    var id = Date.now();
    var name = input_name.value;
    var email = input_email.value;
    var address = input_address.value;
    var phone = input_phone.value;
    var formData = {
        id: id,
        name: name,
        email: email,
        address: address,
        phone: phone
    };
    if (nc === 1 && ec === 1 && ac === 1 && pc === 1) {
        saveData(formData, id);
        location.reload();
    }
    else {
        btnErr.innerHTML = '<p class="text-red mt-3">Fill up all required fields</p>';
    }
});
var inputKey = document.getElementsByTagName('input');
var textareaKey = document.getElementsByTagName('textarea');
for (var i = 0; i < inputKey.length; i++) {
    inputKey[i].addEventListener('keyup', function (e) {
        var count = Number(nc) + Number(ec) + Number(ac) + Number(pc);
        if (count === 4) {
            input_btn.style.opacity = "1";
            input_btn.classList.add("btnHover");
        }
        else {
            input_btn.style.opacity = "0.5";
            input_btn.classList.remove("btnHover");
        }
    });
}
for (var i = 0; i < textareaKey.length; i++) {
    textareaKey[i].addEventListener('keyup', function (e) {
        var count = Number(nc) + Number(ec) + Number(ac) + Number(pc);
        if (count === 4) {
            input_btn.style.opacity = "1";
            input_btn.classList.add("btnHover");
        }
        else {
            input_btn.style.opacity = "0.5";
            input_btn.classList.remove("btnHover");
        }
    });
}
document.getElementById('name').addEventListener('keyup', function (e) {
    btnErr.innerHTML = '';
    if (input_name.value.length >= 2) {
        nc = 1;
        nameErr.innerHTML = '';
    }
    else {
        nc = 0;
        nameErr.innerHTML = '<p class="text-red mt-2">This name contain only letters and 2 or more characters</p>';
    }
});
document.getElementById('email').addEventListener('keyup', function (e) {
    e.preventDefault();
    var validEmail = /[a-zA-Z0-9._]+@(gmail|yahoo|myyahoo|outlook|hotmail)+.[a-z-A-z]{2,}/.test(input_email.value);
    btnErr.innerHTML = '';
    if (validEmail) {
        ec = 1;
        emailErr.innerHTML = '';
    }
    else {
        ec = 0;
        emailErr.innerHTML = '<p class="text-red mt-2">This email address contain with @gmail, @yahoo, @myyahoo, @outlook, @hotmail</p>';
    }
});
document.getElementById('address').addEventListener('keyup', function (e) {
    btnErr.innerHTML = '';
    if (input_address.value.length >= 2) {
        ac = 1;
        addressErr.innerHTML = '';
    }
    else {
        ac = 0;
        addressErr.innerHTML = '<p class="text-red mt-2">This address contain 2 or more characters</p>';
    }
});
document.getElementById('phone').addEventListener('keyup', function (e) {
    btnErr.innerHTML = '';
    if (input_phone.value.length >= 2) {
        pc = 1;
        phoneErr.innerHTML = '';
    }
    else {
        pc = 0;
        phoneErr.innerHTML = '<p class="text-red mt-2">This phone number contain only number</p>';
    }
});
