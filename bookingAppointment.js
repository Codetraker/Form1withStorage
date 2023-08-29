let form = document.getElementById('formApp');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let phoneInput = document.getElementById('phone');
let itemList = document.getElementById('itemlist');

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

    //add delete button here
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-button delete';
    deleteBtn.appendChild(document.createTextNode('Delete'));
    deleteBtn.setAttribute('data-name', myData.name);
    deleteBtn.addEventListener('click', removeItem); // Add this line

    newList.appendChild(textNode);
    newList.appendChild(deleteBtn);
    itemList.appendChild(newList); 
    
}


// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        let name = li.querySelector('.delete').getAttribute('data-name'); 
        localStorage.removeItem(name);
        itemList.removeChild(li);
      }
    }
  }