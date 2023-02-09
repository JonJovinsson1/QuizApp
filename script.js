// https://www.youtube.com/watch?v=riDzcEQbX6k&ab_channel=WebDevSimplified
// start at 19:01


const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(element => {

    });
}

function selectAnswer() {

}

const question = [
    {
        question: 'what is 2+2',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false }
        ]
    }
]