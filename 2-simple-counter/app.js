const HEX = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")
let count = 0;

btns.forEach(btn => {
    btn.addEventListener("click",(e)=>{
        const currentClass = e.currentTarget.classList;
        if(currentClass.contains("decrease")){
            count--;
        }else if (currentClass.contains("increase")){
            count++;
        }else{
            count = 0;
        }
        if(count < 0|| count > 0 || count === 0){
            value.style.color = changeHex()
        }
        value.textContent = count;
    })
})

const changeHex = () =>{
    let hex = "#"
    for(let i=0; i < 6; i++){
        hex += HEX[Math.floor(Math.random() * HEX.length)] 
    }
    return hex
}