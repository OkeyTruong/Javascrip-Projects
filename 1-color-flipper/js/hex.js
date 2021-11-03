const HEX = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const btn = document.getElementById("btn");
const value = document.querySelector(".color");

btn.addEventListener("click", function(){
    let hex = "#";
    for(let i = 0; i < 6; i++){
        hex += HEX[Math.floor(Math.random()* HEX.length)];
    }
    document.body.style.backgroundColor = hex;
    value.textContent = hex
})