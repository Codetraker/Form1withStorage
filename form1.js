let form = document.getElementById('my-form');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
console.log(form);
console.log(nameInput);

form.addEventListener('submit',addInLocal);

function addInLocal(e){
    e.preventDefault();
    let name = nameInput.value;
    let email = emailInput.value;

    console.log(name);
    console.log(email);

    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);

    
}