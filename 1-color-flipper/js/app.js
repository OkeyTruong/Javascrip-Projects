const COLORS = ["Green", "Red","rgba(133,122,200)","#f1f833"]
const BUTTON = document.getElementById("btn")
const COLOR = document.querySelector(".color");

 BUTTON.addEventListener('click',()=>{
    let changColor = COLORS[getRandomNumber()]
    
    COLOR.textContent = changColor;
    document.body.style.backgroundColor = changColor;

})

function getRandomNumber(){
    return Math.floor(Math.random() * COLORS.length)
}
