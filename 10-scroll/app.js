
const btnNavToggle = document.querySelector(".nav-toggle")
const linksContainer = document.querySelector(".links-container")
const links = document.querySelector(".links")

btnNavToggle.addEventListener("click",()=>{
  const linksHeight = links.getBoundingClientRect().height;
  const linksContainerHeight = linksContainer.getBoundingClientRect().height
  if(linksContainerHeight ===0 ){
    linksContainer.style.height = `${linksHeight}px`
  }else{
    linksContainer.style.height =0;
  }
})

const nav = document.querySelector("nav")
const topLink = document.querySelector(".top-link")
window.addEventListener("scroll",()=>{
  const navHeight = nav.getBoundingClientRect().height;
  const scrollHeight = window.pageYOffset;
  // console.log(scrollHeight)
  if(scrollHeight > navHeight){
    nav.classList.add("fixed-nav")
  }else{
    nav.classList.remove("fixed-nav")
  }
  if(scrollHeight > 500){
    topLink.classList.add("show-link")
  }else{
    topLink.classList.remove("show-link")
  }
})

const scrollLinks = document.querySelectorAll(".scroll-link")
scrollLinks.forEach(link =>{
  link.addEventListener("click",(e)=>{
    e.preventDefault()
    const id = e.currentTarget.getAttribute("href").slice(1)
    const element = document.getElementById(id)

    const navHeight = nav.getBoundingClientRect().height;
    // console.log(navHeight) // 82
    const containerHeight = linksContainer.getBoundingClientRect().height;
    // console.log(containerHeight)
    const fixedNav = nav.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
     linksContainer.style.height = 0;
  });
})