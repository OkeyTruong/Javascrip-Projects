let currentItem = 1;

const img = document.querySelector("#person-img")
const author = document.querySelector("#author")
const job = document.querySelector("#job")
const info = document.querySelector("#info")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

window.addEventListener("DOMContentLoaded",() =>{
    displayPerson(currentItem)
    prevBtn.addEventListener("click", () =>{
        currentItem--;
        if(currentItem < 0) currentItem = reviews.length - 1
        displayPerson(currentItem)
    })
    nextBtn.addEventListener("click", () =>{
        currentItem++;
        if(currentItem > reviews.length -1) currentItem = 0;
        displayPerson(currentItem)
    })
    randomBtn.addEventListener("click", () =>{
        currentItem = Math.floor(Math.random() * reviews.length)
        displayPerson(currentItem)
    })
})

const displayPerson = (item) =>{
    let person = reviews[item]
    img.src = person.img
    author.textContent = person.name
    job.textContent = person.job
    info.textContent = person.text
}