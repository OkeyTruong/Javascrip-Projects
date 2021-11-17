const btn = document.querySelector('.nav-toggle');
const links = document.querySelector(".links")

btn.addEventListener("click",()=>{
    const currentClass = links.classList
    // if(currentClass.contains("show-links")){
    //     currentClass.remove("show-links")
    // }else{
    //     currentClass.add("show-links")
    // }
    currentClass.toggle("show-links")
})