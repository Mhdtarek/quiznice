 
 fetch("demoqn10.json")
 .then(response => response.json())
 .then(data => {
 
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    console.log(data)
    deselectAnswers()

    const quizinfo = data[currentQuiz]

    questionEl.innerText = quizinfo.title
    a_text.innerText = quizinfo.qn1
    b_text.innerText = quizinfo.qn2
    c_text.innerText = quizinfo.qn3
    d_text.innerText = quizinfo.qn4
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
       if(answer === data[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < data.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${data.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
      }
    })
})