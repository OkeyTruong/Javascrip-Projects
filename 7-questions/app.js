// const questions = document.querySelectorAll('.question');

// questions.forEach(question => {
//     const btn = question.querySelector('.question-btn');
//     btn.addEventListener("click",()=>{
//         question.classList.toggle('show-text');
//     })
// })

const btns = document.querySelectorAll('.question-btn');

btns.forEach(btn => {
    btn.addEventListener("click",(e)=>{
        let currentClass = btn.parentElement.parentElement;
        currentClass.classList.toggle('show-text');
    })
})
