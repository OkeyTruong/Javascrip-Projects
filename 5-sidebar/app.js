const sidebar = document.querySelector(".sidebar")
const openBtn = document.querySelector(".sidebar-toggle")
const closeBtn = document.querySelector(".close-btn")

openBtn.addEventListener("click", ()=>{
    let currentClass = sidebar.classList
    currentClass.toggle("show-sidebar")
})
closeBtn.addEventListener("click", ()=>{
    let currentClass = sidebar.classList
    currentClass.toggle("show-sidebar")
})
