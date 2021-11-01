const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")
const HEX = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let count = 0;

btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        let hex = "#"
        let style = e.target.classList
        if(style.contains("decrease")){
            count--;
        }else if(style.contains("increase")){
            count++;
        }else{
            count = 0
        }
        for(let i = 0; i < 6; i++){
            hex += HEX[Math.floor(Math.random() * HEX.length)]
        }
        if(count <0 || count > 0){
            value.style.color = hex
        }else{
            value.style.color = "black"
        }
        value.textContent = count;
    })
})
