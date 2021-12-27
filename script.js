const questions = [
    {

        questionWording: "1. Commonly use data types DO NOT include...",
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

var quizQuestion = document.getElementById('quizQuestion');
var selection = document.getElementById('selection');
var correctAnswer = document.getElementById('corectAnswer');

document.getElementById("startButton").addEventListener("click", displayQuestion);
var qIndex = 0;

// displays questions 
function displayQuestion() {

    var h1 = document.createElement('h1');
    h1.textContent = questions[qIndex].questionWording;
    quizQuestion.append(h1);

    for (var i = 0; i < (questions[qIndex].choices.length); i++) {
        var button = document.createElement('button');
        button.setAttribute('class', 'optionSelected')
        button.textContent = questions[qIndex].choices[i];
        button.setAttribute("id", questions[qIndex].choices[i]);
        console.log(questions[qIndex].choices);

        button.onclick = checkAnswers(questions[qIndex].choices[i]);
        selection.append(button);

    }



}

//checks questions and substracts timer if needed
function checkAnswers() {


}


//timer 

function Timer() {

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

    var score = localStorage.getItem("score"); // get it from storage
    var initials = localStorage.getItem("initial");

    localStorage.setItem("score", score); //store in local storage
    localStorage.setItem("initial", initials);
}




