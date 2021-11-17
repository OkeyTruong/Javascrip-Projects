const btnContainer = document.querySelector(".btn-container")
const sectionCenter = document.querySelector(".section-center")

window.addEventListener("DOMContentLoaded",()=>{
    const categories = menu.reduce((value,item) =>{
        if(value.indexOf(item.category)  === -1 ){
            value.push(item.category)
        }
        return value
    },["all"])
    displayBtn(categories)
    displayMenu(menu)
})

const displayBtn = (categories) =>{
    const btnCategory = categories.map(category =>{
        return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`
    })
    btnContainer.innerHTML = btnCategory.join("")
    const filterBtn = btnContainer.querySelectorAll(".filter-btn")
    filterBtn.forEach(btn =>{
        btn.addEventListener("click",()=>{
            const value = btn.dataset.id
            const menuCategory = menu.filter(item =>{
                if(value === item.category){
                    return item
                }
            })
            if(value === "all"){
                displayMenu(menu)
            }else{
                displayMenu(menuCategory)
            }
        })
    })
}
const displayMenu = (menu) =>{
    const menuItem = menu.map(item => {
        return `<active class="menu-item">
        <img src="${item.img}" class= "photo" alt="">
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
                ${item.desc}
        </div>
    </active>`
    })
    sectionCenter.innerHTML = menuItem.join("")
}