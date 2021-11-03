const HEX = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
    btn.addEventListener("click",(e) =>{
        let item = (e.target.classList);    
        
        if(item.contains("decrease")){
            count--;
        }else if(item.contains("increase")){
            count++;
        }else{
            count = 0;
        }
        if(count < 0 || count > 0){
            value.style.color = changeHex();
            console.log(changeHex());
        }else{
            value.style.color = "#102a42"
        }
        value.textContent = count;
    })
});

function changeHex(){
    let hex = "#";
    for(let i = 0; i < 6; i++){
        hex += HEX[Math.floor(Math.random() * HEX.length)];
    }
    return hex;
}