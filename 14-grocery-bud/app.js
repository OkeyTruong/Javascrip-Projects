const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container"); 
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

const grocery = document.getElementById("grocery");

// console.log(alert)
// console.log(form)
// console.log(submitBtn)
// console.log(container)
// console.log(list)
// console.log(clearBtn)
// console.log(grocery)

// edit option
let editElement;
let editFlag = false;
let editID = "";

//  *****  EVENT LISTENERS  *****
//submit button
form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearAll);

function addItem(e) {
    e.preventDefault();
    const value  = grocery.value;
    const id = new Date().getTime().toString();

    if(value && !editFlag){
        const  element = document.createElement("article");
        // add item
        element.classList.add("grocery-item");
        // add id 
        const attr = document.createAttribute("data-id")
        attr.value = id;
        // console.log(attr)
        element.setAttributeNode(attr);
        // console.log(element)
        element.innerHTML = `
            <p class="title">${value}</p>
            <div class="btn-container">
                <button type ="button" class="edit-btn">
                    <i class="fas fa-edit"></i>
                </button>
                <button type ="button" class="delete-btn">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>`
        const editBtn = element.querySelector(".edit-btn");
        const deleteBtn = element.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", deleteItem);
        editBtn.addEventListener("click", editItem);
        // append child
        list.appendChild(element);
        // console.log(list)
        displayAlert("Item added", "success");
        // show container
        container.classList.add("show-container");
        // add to local storage
        addToLocalStorage(id, value);
        // set back to default
        setBackToDefault();
        
    }else if(value && editFlag) {
        editElement.innerHTML = value;
        displayAlert("Item edited", "success");
        setBackToDefault();
    }
    else{
        displayAlert("Please enter a value", "alert-danger");
    }
}
// display Alert
function displayAlert(message, className) {
    alert.textContent = message;
    alert.classList.add(className);

    setTimeout(() => {
        alert.textContent = "";
        alert.classList.remove(className);
    }, 2000);
     
}
function clearAll(){
    const items = document.querySelectorAll(".grocery-item");
    if(items.length >0){
        items.forEach(item => {
            list.removeChild(item);
        });
        container.classList.remove("show-container");
    }
    displayAlert("All items cleared", "alert-success");
    setBackToDefault();
}
// delete item
function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if(list.children.length === 0){
        container.classList.remove("show-container");
    }
    displayAlert("Item deleted", "alert-success");
}
// edit item
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    // console.log(item);
    editElement = e.currentTarget.parentElement.previousElementSibling;
    // console.log(editElement);
    grocery.value = editElement.textContent;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "edit";
}
function setBackToDefault() {
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit";
}
function addToLocalStorage(id, value) {
}