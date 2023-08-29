let form = document.getElementById('my-form');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
console.log(form);
console.log(nameInput);

form.addEventListener('submit',addInLocal);

function addInLocal(e){
    e.preventDefault();
    
    let myData = {
        name : nameInput.value,
        email : emailInput.value
    };
    let myData_serialized = JSON.stringify(myData);
    localStorage.setItem(myData.name , myData_serialized );
    
}