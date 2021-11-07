const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded', () => {
    displayMenu(menu);
    const categories = menu.reduce((acc, item) => {
        if(!acc.includes(item.category)){
           acc.push(item.category);
        }
        return acc;
    },["all"])
    // console.log(categories);
    displayFitlterBtn(categories);
})


const displayFitlterBtn = (categories) => {
    let categorybtns = categories.map(category => {
        return`
       <button class="filter-btn" type="button" data-id="${category}">${category}</button>`
    })
    btnContainer.innerHTML = categorybtns.join('');
    const filterBtns = document.querySelectorAll('.filter-btn');
    // console.log(filterBtns)
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let currentCategory = e.target.dataset.id;
            let menuCategory = menu.filter(item => {
                if(item.category === currentCategory){
                    return item;
                }
            });
            if(currentCategory === 'all'){
                displayMenu(menu);
            }else{
                displayMenu(menuCategory);
            }
        })
    })
}


const displayMenu = (menu) => {
   let menuItems = menu.map(item=>{
       return`
       <active class="menu-item">
       <img src="${item.img}" class= "photo" alt="${item.title}">
       <div class="item-info">
           <header>
               <h4>${item.title}</h4>
               <h4 class="price">${item.price}</h4>
           </header>
           <p class="item-text">
            ${item.desc}
       </div>
   </active> `
   })
   sectionCenter.innerHTML = menuItems.join('');
}