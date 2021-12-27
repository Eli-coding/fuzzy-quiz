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
var correctAnswer = document.getElementById('correctAnswer');

document.getElementById("startButton").addEventListener("click", startGame);
var qIndex = 0;
var timeLeft = 90;
var timerInterval = null;

function startGame() {
    Timer();
    displayQuestion();
}

// displays questions 
function displayQuestion() {

    var h1 = document.createElement('h1');
    h1.textContent = questions[qIndex].questionWording;
    quizQuestion.append(h1);

    for (var i = 0; i < (questions[qIndex].choices.length); i++) {
        var button = document.createElement('button');
        var output = questions[qIndex].choices[i];
        button.setAttribute('class', 'optionSelected');
        button.textContent = questions[qIndex].choices[i];
        button.setAttribute("value", questions[qIndex].choices[i]);


        //button.onclick = function(){checkAnswers(questions[qIndex].choices[i])};
        button.addEventListener("click", function (event) { checkAnswers(event.target.value) });
        selection.append(button);

    }



}

//checks questions and substracts timer if needed
function checkAnswers(selectedChoice) {
    console.log(selectedChoice);
    if (selectedChoice === questions[qIndex].answer) {

        correctAnswer.innerHTML = "Correct!";

    } else {

        correctAnswer.innerHTML = "Wrong!";
        timeLeft = timeLeft - 8;
        //subtract time from timer
    }


    qIndex++
    quizQuestion.innerHTML = "";
    selection.innerHTML = "";
    correctAnswer.innerHTML = "";


    if (qIndex < questions.length) {
        displayQuestion();
    } else {
        endGame();
    }


}


//timer 

function Timer() {


    // Selects element by class
    var timeEl = document.querySelector(".time");


    timerInterval = setInterval(function () {

        timeLeft--;

        timeEl.textContent = timeLeft;

        if (timeLeft === 0) {

            clearInterval(timerInterval);

            endGame();
        }

    }, 1000);



}

function endGame() {

    clearInterval(timerInterval);
    document.querySelector(".time").innerHTML = "";
    //TODO: Ask user to enter its Initials. 
    //TODO: calculate points and save to local storage.
    localStorage.setItem("score", score); //store in local storage
    localStorage.setItem("initial", initials);

   //TODO: Move to high score page initials and storage
    
}


// Highscores takes intitials and score
function Highscores() {

    //TODO: Display Initials and Highscore from last user who played.

    var score = document.createElement('h1');
    h1.textContent = "";
    score.append(h1);

    var score = localStorage.getItem("score"); // get it from storage
    var initials = localStorage.getItem("initial");
}





