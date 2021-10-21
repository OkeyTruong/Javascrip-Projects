const HEX = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const BUTTON = document.getElementById("btn");
const COLOR = document.querySelector(".color");
BUTTON.addEventListener('click', function(){
    let hexColor = "#";
    for(let i = 0; i < 6;i++){
        hexColor += HEX[getRandomNumber()]
        console.log(hexColor);
    }
    COLOR.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})
function getRandomNumber(){
    return Math.floor(Math.random() * HEX.length)

}
