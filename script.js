
const questions = [
    {
        question: "When did Canada gain independence?",
        answer: "1978"
    }
]

let currentQuestionIndex = 0;
let questionElement = document.getElementById("question");
let answerButtons = document.getElementById("answer-buttons");

function showQuestion(){
    //question display part
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;

    //answer button and text display part
    let button = document.createElement("button");
    button.innerHTML = currentQuestion.answer;
    answerButtons.appendChild(button);

}

showQuestion();