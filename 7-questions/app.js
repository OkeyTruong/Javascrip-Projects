
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(btn =>{
//     btn.addEventListener('click', function (e) {
//         const parent = e.target.parentElement.parentElement.parentElement.parentElement;
//         parent.classList.toggle('show-text');
//     })
// })

const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    console.log(question);
    let btn = question.querySelector('.question-btn');
    btn.addEventListener('click', function (e) {
        question.classList.toggle('show-text');
    })
})