// variables and declarations
var timerEl = document.getElementById("timer");
var viewHighScores = document.getElementById("highscores-link");
var welcomeEl = document.getElementById("welcome");
var startButton = document.getElementById("start-button");
var allQuestionsEl = document.getElementById("all-questions");
var questionEl = document.getElementById("question");
var nextButton = document.getElementById("next-button");
var answerButtonsEl = document.getElementById("answer-buttons");
var answersEl = document.getElementById("answers");
var submitButton = document.getElementById("submit-button");
var clearButton = document.getElementById("clear-button");
var playerInitials = document.getElementById("player-initials");
var gobackButton = document.getElementById("goback-button");
var scoreField = document.getElementById("player-score");
var scores = JSON.parse(localStorage.getItem("scores")) || [];


var timeLeft = 120;
var currentQuestion = [];
var randomQuestion = [];


// timer 
function setTimer() {
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;
    if (timeLeft <= 0) {
        saveScore();
    }
}

// start quiz event listener
startButton.addEventListener("click", startGame);

/* 
start: click the start button
    -then timer starts 
    -quesiton 1 is unhidden
    -if answered correctly, correct in green is shown
    -press next button and 
    -another question shows up
    -if answered wrong, incorrect is shown 
    -10 seconds is deducted from timer

    when all questions are answered ------ game is over-----save initials and restart show up
    when timer reaches 0 ----------game is over---------save initials and restart show up
    
view highscores : click link 
    -when link is clicked a list of saved scores is displayed 
    -buttons to go back or reset show up. 

functions - start game
functions - answer question
*/
