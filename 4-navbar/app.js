const links = document.querySelector('.links');
const navToggleBtn = document.querySelector(".nav-toggle")

navToggleBtn.addEventListener('click', ()=>{
    let currentClass = links.classList
    // if (currentClass.contains("show-links")){
    //     currentClass.remove("show-links")   
    // }else{
    //     currentClass.add("show-links");
    // }
    currentClass.toggle("show-links")
})