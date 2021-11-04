const btn = document.querySelector(".btn")
const value = document.querySelector(".color")
const COLORS = ["Green", "Red","rgba(133,122,200)","#f1f833"]

btn.addEventListener("click",()=>{
      let color = COLORS[Math.floor(Math.random()*COLORS.length)]
      value.textContent = color
      document.body.style.backgroundColor = color;    
})