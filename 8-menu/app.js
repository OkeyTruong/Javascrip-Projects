const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");


window.addEventListener("DOMContentLoaded", () => {
    (displayMenuItem(menu));
})
const displayMenuItem = (menu) => {
    let displayMenu = menu.map(item => {
        return `<active class="menu-item">
        <img src="${item.img}" class= "photo" alt="${item.title}">
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
                ${item.desc}
        </div>
    </active>`
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
    sectionCenter.innerHTML = displayMenu;
}
filterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let categoryItem = e.target.dataset.id;
        let menuCategory  = menu.filter(item => {
            if(item.category === categoryItem){
               return(item);
            }
        });
        if(categoryItem === "all"){
            displayMenuItem(menu);
        }else{
            displayMenuItem(menuCategory);
        }
    })
})
