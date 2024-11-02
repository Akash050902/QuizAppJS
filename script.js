const questions = [
    {
        question: "what is my laptop brand?",
        answers: [
            { text: "Asus", correct: true},
            { text: "Alienware", correct: false},
            { text: "hp", correct: false},
            { text: "dell", correct: false}
        ]
    },

    {
        question: "what is my name?",
        answers: [
            { text: "Akas", correct: false},
            { text: "Akash", correct: true},
            { text: "Akkash", correct: false},
            { text: "Aakash", correct: false}
        ]
    },

    {
        question: "where am i from?",
        answers: [
            { text: "Madras", correct: false},
            { text: "calicut", correct: false},
            { text: "chennai", correct: true},
            { text: "kerala", correct: false}
        ]
    },

    {
        question: "what is my favourite colour?",
        answers: [
            { text: "white", correct: false},
            { text: "black", correct: false},
            { text: "brown", correct: false},
            { text: "blue", correct: true}
        ]
    },

    {
        question: "what is my favourite tv show?",
        answers: [
            { text: "Modern Family", correct: true},
            { text: "The office", correct: false},
            { text: "Friends", correct: false},
            { text: "How I Met Your Mother", correct: false}
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Your Score: ${score} / ${questions.length}`;
    nextButton.innerHTML = "Play Again!";
    nextButton.style.display = "block";
}

function 
handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})



startQuiz();