let form = document.getElementById('formApp');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let phoneInput = document.getElementById('phone')

form.addEventListener('submit',addInLocal);

function addInLocal(e){
    e.preventDefault();
    
    let myData = {
        name : nameInput.value,
        email : emailInput.value,
        phone : phoneInput.value
    };
    let myData_serialized = JSON.stringify(myData);
    localStorage.setItem(myData.name , myData_serialized );
    
    let myData_deserialized = JSON.parse(localStorage.getItem(myData.name));

    let newUl = document.getElementById('itemlist')
    let newList = document.createElement('li');
    newList.className = 'items';
    let textNode = document.createTextNode(`Name:- ${myData_deserialized.name} - Email Id:- ${myData_deserialized.email} - Mob:- ${myData_deserialized.phone}`);

    newList.appendChild(textNode);
    newUl.appendChild(newList); 
    
}