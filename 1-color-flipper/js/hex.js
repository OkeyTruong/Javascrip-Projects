const HEX = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const color = document.querySelector(".color");
const btn = document.querySelector(".btn");
// const content = document.querySelector(".content")

btn.addEventListener("click",()=>{
    let hex = "#"
    for(let i = 0; i < 6; i++){
        hex += HEX[randomItem()]
    }
    color.textContent = hex;
    // color.style.color = hex;
    // content.querySelector("h2").style.background = hex;
    document.body.style.background = hex;
})

const randomItem = () =>{
    return Math.floor(Math.random() * HEX.length)
}