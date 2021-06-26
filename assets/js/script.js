// variable declarations for html elements
//timer
let timeEl = document.querySelector("#timer");
let timeRemaining = 75;

//main sections
//questions
const questionSectionEl = document.querySelector("#questions-section");
let questionsEl = document.querySelector("#question");
const ciMessage = document.querySelector("#correct-incorrect-message");
//game over
const gameOverEl = document.querySelector("#game-over");
let finalScoreEl = document.querySelector("#final-score");
let initialsSubmit = document.querySelector("#initials");
//high scores
const highscoresEl = document.querySelector("#highscores");
let highscoresList = document.querySelector("#highscores-list");

//buttons
const startBtn = document.querySelector("#start-button");
const answer1Btn = document.querySelector("#answer1");
const answer2Btn = document.querySelector("#answer2");
const answer3Btn = document.querySelector("#answer3");
const answer4Btn = document.querySelector("#answer4");
const submitScoreBtn = document.querySelector("#submit-score");

//questions and answers array
const quesitons = [
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
        quesiton: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correctAnswer: "3"
    }
];
