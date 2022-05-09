  const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },


];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 1
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})

//quiz calc

let answer1 = data[1].answer;
let answer2 = data[2].answer;
let answer3 = data[3].answer;
let answer4 = data[4].answer;
let answer5 = data[5].answer;
let answer6 = data[6].answer;
let answer7 = data[7].answer;
let answer8 = data[8].answer;
let answer9 = data[9].answer;
let answer10 = data[10].answer;
console.log(answer1)
console.log(answer2)
console.log(answer3)
console.log(answer4)
console.log(answer5)

const quizForm = document.querySelector('.qns-form');
const resultPanel = document.querySelector('#result');
const Marks = document.querySelector('span.marks');
const testAnswers = [answer1 , answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10];

quizForm.addEventListener('submit', e => {
e.preventDefault();

let userAnswers = [quizForm.qn1.value, quizForm.qn2.value, quizForm.qn3.value, quizForm.qn4.value, quizForm.qn5.value, quizForm.qn6.value, quizForm.qn7.value, quizForm.qn8.value, quizForm.qn9.value, quizForm.qn10.value];
let score = 0;

userAnswers.forEach((answer, index) => {
 if (answer === testAnswers[index]) {
   score += 20;
 }
});

resultPanel.classList.remove('hide');


scrollTo({
 top: 0,
 behavior: 'smooth'
});

let output = 0;

const counter = setInterval(() => {
 Marks.textContent = `${output}%`;

 if (output === score) {
   clearInterval(counter);
 } else {
   output++;
 }
}, 10)

quizForm.reset(); })
