const questions = [
    {

        questionWording: "1. Commonly use data types DO NOT include",
        choices: ["string", "booleans", "numbers"], 
                         
        answer: "booleans"
    },
    {

        questionWording: "2. Arrays in Javascript can be used to store?",
        choices: ["numbers", "strings", "All of the above"],

        answer: "All of the above"
    },
    {

        questionWording: "3. Inside which HTML element do we put javascript?",
        choices: ["<js>", "<h2>", "<script>"],

        answer: "<script>"
    },
    {

        questionWording: "4. Where is the correct place to insert a JavaScript?",
        choices: ["<head>", "<body>", "both are correct"],

        answer: "both are correct"
    },
    {

        questionWording: "5. How do you create a function in JavaScript?",
        choices: ["function myFunction()", "function: myFunction()", "function = myFunction()"],

        answer: "function myFunction()"
    },

] 

var quizContainer = document.getElementById('quizContainer');
var resultsContainer = document.getElementById('output');

document.getElementById("startButton").addEventListener("click", displayQuestion);
var questionTracker = 0;

// displays questions 
function displayQuestion() {

    console.log("hi from displayquestions");

    var theQuestion = document.getElementById("quizContainer"); 
    console.log(theQuestion);

    theQuestion.innerHTML = "Hello World";
}

//checks questions and substracts timer if needed
function checkAnswers() {
    
  
}


//timer 

function Timer()
{

    var timeLeft = 90
// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main")


function setTime() {
    var timerInterval = setInterval(function () {

        timeLeft--;

        timeEl.textContent = timeLeft;

        if (timeLeft === 0) {

            clearInterval(timerInterval);

            document.write("Game Over.")

            Highscores();
        }

    }, 20000);
}


}

// Highscores takes intitials and score
function Highscores() {
    
    var score = localStorage.getItem ("score"); // get it from storage
    var initials = localStorage.getItem ("initial"); 

    localStorage.setItem ("score", score ); //store in local storage
    localStorage.setItem ("initial", initials ); 
}




