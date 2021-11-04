const HEX = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const value = document.querySelector(".color");
const btn = document.querySelector(".btn");

btn.addEventListener("click",()=>{ 
    let hex = "#";
    for(let i = 0; i < 6; i++ ){
        let random = Math.floor(Math.random() * HEX.length);
        hex += HEX[random];
        console.log(hex)
    }
    value.textContent = hex;
    document.body.style.backgroundColor = hex;
});