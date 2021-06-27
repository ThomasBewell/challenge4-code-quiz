// variable declarations for html elements
//timer
let timeEl = document.querySelector("#timer");
let timeRemaining = 75;

//main sections
//start page
const startPageEl = document.querySelector("#start");
//questions
const questionSectionEl = document.querySelector("#questions-section");
let questionsEl = document.querySelector("#question");
let questionsIndex = 0;
const ciMessageEl = document.querySelector("#correct-incorrect-message");
//game over
const gameOverEl = document.querySelector("#game-over");
let finalScoreEl = document.querySelector("#final-score");
let initialsSubmit = document.querySelector("#initials");
//high scores
const highscoresEl = document.querySelector("#highscores");
let highscoresListEl = document.querySelector("#highscores-list");

//buttons
const startBtn = document.querySelector("#start-button");
const answer1Btn = document.querySelector("#answer1");
const answer2Btn = document.querySelector("#answer2");
const answer3Btn = document.querySelector("#answer3");
const answer4Btn = document.querySelector("#answer4");
const answerBtn = document.querySelectorAll(".answer-button")
const submitScoreBtn = document.querySelector("#submit-score");

//questions and answers array
const questions = [
    {
        question: "Commonly used data types do NOT include:",
        answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correctAnswer: "2"
    },
    {
        question: "The condition in an if/else statement is enclosed within _____.",
        answers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        correctAnswer: "1"
    },
    {
        question: "Arrays in Javascript can be used to store _____.",
        answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: "3"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correctAnswer: "2"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correctAnswer: "3"
    }
];

//functions

//timer function
function startTimer() {
    let timerInterval = setInterval (function() {
        timeRemaining--;
        timeEl.textContent = `Time:${timeRemaining}`;

        if (timeRemaining === 0 || questionsIndex === questionsIndex.length) {
            clearInterval(timerInterval);
            questionSectionEl.style.display = "block";
            finalScoreEl.textContent = timeRemaining;
        }
    }, 1000);
}

//start the quiz
function startQuiz() {
    startPageEl.style.display = "none";
    questionSectionEl.style.display = "block";
    questionsIndex = 0;

    startTimer();
    displayQuestion(questionsIndex);
}

//display questions
function displayQuestion(i) {
    if (i < questions.length) {
        questionsEl.textContent = questions[i].question;
        answer1Btn.textContent = questions[i].answers[0];
        answer2Btn.textContent = questions[i].answers[1];
        answer3Btn.textContent = questions[i].answers[2];
        answer4Btn.textContent = questions[i].answers[3];
    }
}

//check given answer against correct answer
function checkAnswer(event) {

    
    //tell user if they got it right, subtract time if not
    ciMessageEl.style.display = "block";
    let message = document.createElement("message");
    ciMessageEl.appendChild(message);

    if (questions[questionsIndex].correctAnswer === event.target.value) {
        message.textContent = "Correct!";
    } else if (questions[questionsIndex].correctAnswer !== event.target.value) {
        timeRemaining = timeRemaining - 10;
        message.textContent = "Incorrect!";
    }

    //message lasts one second
    setTimeout (function () {
        message.style.display = "none";
    }, 1000);
    
    //move on to next question
    if (questionsIndex < questions.length) {
        questionsIndex++;
    }
    displayQuestion(questionsIndex);
}

//button functionality
//start quiz button
startBtn.addEventListener("click", startQuiz);

//answer buttons
answerBtn.forEach(i => {
    i.addEventListener("click", checkAnswer);
});
