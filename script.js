
const questions = [
    {
        question: "When did Canada gain independence?",
        answers: [
            {text: "1978", correct: true},
            {text: "1988", correct: false},
            {text: "1991", correct: false},
            {text: "1964", correct: false},
    
        ]
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
    for (let i = 0; i < currentQuestion.answers.length; i++){
        let button = document.createElement("button");
        button.innerHTML = currentQuestion.answers[i].text;
        answerButtons.appendChild(button);
        if (currentQuestion.answers[i].correct){
            button.dataset.correct = currentQuestion.answers[i].correct;
        }

        button.addEventListener("click", selectAnswer);
    }
    
}

function selectAnswer(e){
    let selectedButton = e.target;
    let isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect){
        selectedButton.classList.add("correct");
    }
    else{
        selectedButton.classList.add("incorrect");
    }
}

showQuestion();
