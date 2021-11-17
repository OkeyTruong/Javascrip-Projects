// const questions = document.querySelectorAll(".question")

// questions.forEach(question =>{
//     const btn = question.querySelector(".question-btn")
//     btn.addEventListener("click",(e)=>{
//         question.classList.toggle('show-text');
//     })
// })
const btns = document.querySelectorAll(".question-btn")

btns.forEach(btn=>{
    btn.addEventListener("click",(e)=>{
        const element = btn.parentElement.parentElement;
        element.classList.toggle("show-text")
    })
})