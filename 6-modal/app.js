
const modal = document.querySelector(".modal-overlay")
const openModal = document.querySelector(".modal-btn")
const closeModal = document.querySelector(".close-btn")

let currentClass = modal.classList;

openModal.addEventListener("click", ()=>{
    // currentClass.add("open-modal")
    currentClass.toggle("open-modal")
})
closeModal.addEventListener("click", ()=>{
    // currentClass.remove("open-modal")
    currentClass.toggle("open-modal")  
})