const COLORS = ["Green", "Red","rgba(133,122,200)","#f1f833"]
const btn = document.getElementById("btn");
const value = document.querySelector(".color");

btn.addEventListener("click", function(){
   let random = Math.floor(Math.random() * COLORS.length);
   document.body.style.backgroundColor = COLORS[random];
   value.textContent = COLORS[random]
//    console.log(COLORS[random])
})