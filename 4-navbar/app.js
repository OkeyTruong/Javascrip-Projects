const navToggleBtn = document.querySelector('.nav-toggle');
const links = document.querySelector(".links");

navToggleBtn.addEventListener("click",()=>{
    // console.log(links.classList)
    const currentClass = links.classList;
    // if(currentClass.contains("show-links")){
    //     links.classList.remove("show-links");
    // }else{
    //     links.classList.add("show-links");
    // }
    currentClass.toggle("show-links");
})
