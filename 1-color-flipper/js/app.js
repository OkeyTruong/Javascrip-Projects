const colors = ["Green", "Red","rgba(133,122,200)","#f1f833"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color");


btn.addEventListener('click',()=>{
    let changColor = "";
    for(let i = 0; i < colors.length;i++){
        changColor = colors[getRandomNumber()]
    }
    color.textContent = changColor;
    document.body.style.backgroundColor = changColor;

})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}