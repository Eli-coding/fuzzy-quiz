
//Questions - Answers - Message 
var questionTracker = 0;

function displayQuestion(qIndex) {

    var h1 = document.createElement('h1');
    h1.textContent = questions[qIndex].questionWording;
    document.getElementById('content').append(h1);

    for (var i = 0; i < questions[qIndex].choices.length; i++) {
        var button = document.createElement('button');
        button.setAttribute('class', 'optionSelected')
        button.textContent = questions[qIndex].choices[i];

        document.getElementById('content').append(button);

    }


}

//fix event listener for button options

var questions = [
    {
        
        questionWording: "1. Commonly use data types DO NOT include",
        choices: ["string", "booleans", "numbers"], //buttons
        answer: ["booleans"]
    },
    {
        
        questionWording: "2. Arrays in Javascript can be used to store?",
        choices: ["numbers", "strings", "All of the above"],
        answer: ["All of the above"]
    },
    {
        
        questionWording: "3. Inside which HTML element do we put javascript?",
        choices: ["<js>", "<h2>", "<script>"],
        answer: ["<script>"]
    },
    {
        
        questionWording: "4. Where is the correct place to insert a JavaScript?",
        choices: ["<head>", "<body>", "both are correct"],
        answer: ["both are correct"]
    },
    {
        
        questionWording: "5. How do you create a function in JavaScript?",
        choices: ["function myFunction()", "function: myFunction()", "function = myFunction()"],
        answer: ["function myFunction()"]
    },

]


//checks answers 
for (i = 0; i >= questions.length; i++) {
    if (choices === answer) {
        document.write("Correct!");

    } else {
        document.write("Wrong!")
        //subtracts time to timer
    }
}
// Highscores takes intitials and score

//timer 
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


function Highscores() {
    document.write("Enter initials:")
    //input 
    // local memory 
}

document.getElementById("button").addEventListener("click", function () {


    displayQuestion(questionTracker);


    var options = document.getElementsByClassName('optionSelected');
    console.log('test', options);

   for (var i = 0; i < options.length; i++) {
        options[i].addEventListener("click", function () {
            questionTracker++
            document.getElementById('content').innerHTML = "";
            displayQuestion(questionTracker);
        })
    }

})


//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and my score
// click start to begin questions and timer