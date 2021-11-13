const nav = document.querySelector('#nav');


window.addEventListener('scroll', () => {
 const navHeight = nav.getBoundingClientRect().height;
 const scroll = window.scrollY;
 if(scroll > navHeight){
  nav.classList.add('fixed-nav');
 }else{
  nav.classList.remove('fixed-nav');
 }
 const topLink = document.querySelector('.top-link');
 if(scroll > 620){
  topLink.classList.add('show-link');
}else{
  topLink.classList.remove('show-link');
}
})

