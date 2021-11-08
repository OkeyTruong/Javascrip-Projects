const COLORS = ["Green", "Red","rgba(133,122,200)","#f1f833"]
const color = document.querySelector(".color")
const btn = document.querySelector("#btn")

btn.addEventListener("click", ()=>{
      let randomColor = COLORS[Math.floor(Math.random() * COLORS.length)]
      color.style.color = randomColor
      color.textContent = randomColor
      document.body.style.backgroundColor = randomColor
})
