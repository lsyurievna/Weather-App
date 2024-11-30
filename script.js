
const questions = [
    {
        question: "When did Canada gain independence?",
        answers: [
            {text: "1978", correct: true},
            {text: "1988", correct: false},
            {text: "1991", correct: false},
            {text: "1964", correct: false},
    
        ]
    },
    {
        question: "What is the biggest animal in the world?",
        answers: [
            {text: "African elephant", correct: false},
            {text: "Giant giraffe", correct: false},
            {text: "White whale", correct: true},
            {text: "Mouse", correct: false},
    
        ]
    }
]

let currentQuestionIndex = 0;
let questionElement = document.getElementById("question");
let answerButtons = document.getElementById("answer-buttons");
let nextButton = document.getElementById("next-btn");

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

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

//Deletes the options from previous question 
//showQuestion() then makes new buttons
//using four here as a counter because there is always
// 4 answers to quizzes
function next(){
    for (let i = 0; i < 4; i ++){
        answerButtons.children[0].remove();
    }
    currentQuestionIndex ++;
    showQuestion();
}

showQuestion();
