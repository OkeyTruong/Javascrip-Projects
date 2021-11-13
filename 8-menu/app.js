const btnContainer = document.querySelector('.btn-container');

window.addEventListener("DOMContentLoaded",()=>{
    const categories = menu.reduce((value, item) =>{
        if(!value.includes(item.category)){
            value.push(item.category);
        }
        return value;
    },["all"])
    displayBtnCategory(categories)
    displayMenu(menu)

})

const displayBtnCategory = (categories) => {
    const btn = categories.map(category => {
        return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`
    }) 
    // console.log(btn)
    btnContainer.innerHTML = btn.join("")
    const filterBtns = btnContainer.querySelectorAll('.filter-btn')
    filterBtns.forEach(btn => {
        btn.addEventListener('click', ()=>{
            const id = btn.dataset.id;
            const menuItems = menu.filter(item => item.category === id)
            console.log(menuItems)
           if(id === "all"){
               displayMenu(menu)
           }else{
               displayMenu(menuItems)
           }
        })
    })
}

const sectionCenter = document.querySelector('.section-center');
const displayMenu = (menu) =>{
    const menuItems = menu.map(item => {
        return `<article class="menu-item">
        <img src="${item.img}" alt="${item.title}" class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">${item.desc}</p>
        </div>
      </article>`
    })
    sectionCenter.innerHTML = menuItems.join("")
}