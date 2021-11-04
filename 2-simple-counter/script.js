const HEX = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let count = 0;

const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")

btns.forEach(btn => {
    // console.log(btn.classList)
    btn.addEventListener("click", (item) => {
        // // console.log(item.target.classList)
        // let valueClass = item.target.classList[1]
        // // console.log(valueClass)
        // if(valueClass === "decrease"){
        //     count--
        // }else if(valueClass === "increase"){
        //     count++;

        // }else{
        //     count = 0;
        // }
        // value.textContent = count

        let valueClass = item.target.classList;
        if(valueClass.contains("decrease")){
            count--
        }else if(valueClass.contains("increase")){
            count++;
        }else{
            count = 0;
        }
        if(count < 0 || count > 0 || count === 0){
            value.style.color = changeColor();
        }
        value.textContent = count
    })
})

const changeColor = () => {
    let hex = "#";
    for(let i = 0; i < 6; i++){
        hex += HEX[Math.floor(Math.random() * HEX.length)]
    }
    return hex;
}