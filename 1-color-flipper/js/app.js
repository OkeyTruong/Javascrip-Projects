const COLORS = ["Green", "Red","rgba(133,122,200)","#f1f833"]
const color = document.querySelector(".color");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
      const randomNumber = COLORS[Math.floor(Math.random() * COLORS.length)];
      color.textContent = randomNumber;
      document.body.style.backgroundColor = randomNumber;
})