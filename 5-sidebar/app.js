const openBtn = document.querySelector(".sidebar-toggle")
const closeBtn = document.querySelector(".close-btn")
const sidebar = document.querySelector(".sidebar")

openBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("show-sidebar")
})
closeBtn.addEventListener("click",()=>{
    sidebar.classList.remove("show-sidebar")
})