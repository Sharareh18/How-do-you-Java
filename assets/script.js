// variables and declarations
var timerEl = document.getElementById("timer");

var welcomeEl = document.getElementById("welcome");
var startButton = document.getElementById("start-button");
var allQuestionsEl = document.getElementById("all-questions");
var questionEl = document.getElementById("question");
var assessmentEl = document.getElementById("assessment")

var answerButtonsEl = document.getElementById("answer-buttons");
var submitButton = document.getElementById("submit");
var allDone = document.getElementById("end-quiz");
var clearButton = document.getElementById("clear-button");
var playerInitials = document.getElementById("initials");
var goBackButton = document.getElementById("goback-button");

var viewHighScores = document.getElementById("highscores-list");



var timer;
var timeLeft = 90;
var currentQuestionIndex = 0;


// var questions = questions for the quiz to be populated from here
var questions = [
    {
        ask: "Inside which HTML element do we put the JavaScript?",
        options: ["<script>", "<javascript>", "<js>", "<jsScript>"],
        correct: "<script>",
    },

    {
        ask: "How can you add a comment in a JavaScript?",
        options: ["//this is a comment", "--> this is a comment", "=c this is a comment", ":: this is a comment"],
        correct: "//this is a comment",
    },

    {
        ask: "How do you create a new function in JavaScript?",
        options: ["new.function()", "functionNew=New", "function myfunction() {}", "function=new()"],
        correct: "function myfunction() {}",
    },

    {
        ask: "Which of the following defines a variable in JavaScript",
        options: ["set", "var", "else", "if"],
        correct: "var",
    },

];


// with this the click represents the event that starts the quiz, runs the timer at 90 seconds and loads question.  
startButton.addEventListener("click", startQuiz);

// 
function startQuiz() {
    startButton.classList.add("hide");
    allQuestionsEl.classList.remove("hide");
    welcomeEl.classList.add("hide");
    timerEl.textContent = timeLeft;


    timer = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            timerEl.textContent = timeLeft;
        } else {
            endQuiz();
        }
    }, 1000);

    displayQuestion();
}

// next question loads if there are questions left in the array. 
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

// question and answers are pulled from the array and placed in the designated buttons on the screen. Click event designated user "answer"
function displayQuestion() {
    document.getElementById("answer-buttons").innerHTML = "";

    questionEl.innerText = questions[currentQuestionIndex].ask;
    questions[currentQuestionIndex].options.forEach((option) => {
        let button = document.createElement("button");
        button.innerText = option;
        answerButtonsEl.appendChild(button);
        button.className = "option button";
    });
}
answerButtonsEl.addEventListener("click", selectedAnswer);

// event within this function only to assess the response and display the result to the user. 
function selectedAnswer(event) {
    var answerSelected = event.target.innerText;
    if (answerSelected != questions[currentQuestionIndex].correct) {
        timeLeft -= 10;
        assessmentEl.textContent = "SORRY NOT CORRECT";
    } else {
        assessmentEl.textContent = "CORRECT!";
    }

    assessmentEl.setAttribute("class", "assessment");
    setTimeout(function () {
        assessmentEl.setAttribute("class", "assessment hide");
    }, 500);

    nextQuestion();
}

// the function will end the Quiz and display the final score.
function endQuiz() {
    allQuestionsEl.classList.add("hide");

    var finalScoreEl = document.getElementById("final-score");

    allDone.classList.remove("hide");

    clearInterval(timer);
    finalScoreEl.textContent = timeLeft;
    timerEl.classList.add("hide");
}

// saving the high score to be displayed in a list. 
submitButton.onclick = saveHighScore;
var saveHighScore = function () {
    initials = playerInitials.value;
  
    if (initials !== "") {
      var highScore = JSON.parse(window.localStorage.getItem("highscores-list")) || [];
  
      // adding new score
      var newScore = {
        score: timeLeft,
        initials: playerInitials,
      };
  
      highScore.push(newScore);
      localStorage.setItem("highScore", JSON.stringify(highScore));
  
    }
  };
  






