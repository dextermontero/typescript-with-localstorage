var keys = Object.keys(localStorage);
var data = '';
for(var key of keys){
    var userData= JSON.parse(localStorage.getItem(key))
    data += `
    <li class="itemList shadow-sm">
        <div class="justify-between">
            <p class="p-8 text-gray text-md font-lighter">`+ userData.name +`</p>
            <div class="inline-block">
                <button type="button" id="viewItem" class="btnview" onclick="viewItem(this)" data-name="`+ userData.id +`"><i class="fa-solid fa-eye"></i></button>
                <button type="button" id="editItem" class="btnview" onclick="editView(this)" data-name="`+ userData.id +`"><i class="fa-solid fa-pen-to-square"></i></i></button>
                <button type="button" id="removeItem" class="btndelete" onclick="removeItem(this)" data-name="`+ userData.id +`"><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>
    </li>`;
}

if(localStorage.length <= 0){
    data += `<div class="flex items-center justify-center text-gray text-md">No Available data</div>`;
}

document.getElementById('grid').innerHTML = data;

// Save Data
function saveData(formData, id) {
    localStorage.setItem(id, JSON.stringify(formData));
}

// Remove Item By Key
function removeItem(name){
    var name = name.getAttribute("data-name");
    for(var i = 0; i < keys.length; i++){
        if(name === keys[i]){
            localStorage.removeItem(keys[i]);
        }
    }
    window.location.href = "index.html";
}

// Edit View
function editView(name){
    window.location.href = "edit.html?id="+name.getAttribute("data-name");;
}

// View Item by key
function viewItem(name){
    window.location.href = "view.html?id="+name.getAttribute("data-name");;
}

// Remove All Key
function clearAll() {
    localStorage.clear();
    window.location.href = "index.html";
}