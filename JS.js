const quizData = [ 
    {
        question: "What year did Disneyland open?",
        a: "1955",
        b: "1960",
        c: "1985",
        d: "1975",
        correct: "a",
    },
   
    {
        question: "How many fingers does Mickey Mouse have?",
        a: "Three",
        b: "Four",
        c: "Five",
        d: "Four (three fingers and a thumb",
        correct: "d",
    },

    {
        question: "Genie was stuck in the lamp for how many years before Aladdin found him",
        a: "10,000 years",
        b: "15,000 years",
        c: "20,000 years",
        d: "none of the above",
        correct: "a",
    },


    {
        question: "How old is Crush in Finding Nemo?",
        a: "188",
        b: "150 (and still young!)",
        c: "100",
        d: "58",
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


let currentQuiz = 0
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
        if(answer === quizData[currentQuiz].correct)
        score++
    }

    currentQuiz++

    if(currentQuiz < quizData.length) {
        loadQuiz()
    } else {
        quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly.</h2>
        <button onclick="location.reload()">Reload</button>
        `
    }

})








    

    
