const img = document.querySelector('#person-img');
const author = document.querySelector("#author")
const job = document.querySelector("#job")
const info = document.querySelector("#info")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")


let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {
    showPerson(currentItem)
    prevBtn.addEventListener('click', () => {
        currentItem--;
        if(currentItem < 0){
            currentItem = reviews.length - 1;
        }
        showPerson(currentItem)
    })
    nextBtn.addEventListener('click', () => {
        currentItem++;
        if(currentItem > reviews.length - 1){
            currentItem = 0;
        }
        showPerson(currentItem)
    })
    randomBtn.addEventListener('click', () => {
        currentItem = Math.floor(Math.random() * reviews.length);
        showPerson(currentItem);
    })
})

const showPerson = (person) => {
    let item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
