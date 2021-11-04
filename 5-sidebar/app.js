const sidebarToggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
let currentClass = sidebar.classList;

sidebarToggleBtn.addEventListener('click', () => {
    if(currentClass.contains("show-sidebar")){
        currentClass.remove("show-sidebar");
    }else{
        currentClass.add("show-sidebar");
    }
})
closeBtn.addEventListener('click', () => {
    if(currentClass.contains("show-sidebar")){
        currentClass.remove("show-sidebar");
    }
})