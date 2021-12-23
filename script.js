
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
        // questionNumber: "1",
        questionWording: "1. What is a dog?",
        choices: ["carrot", "sky", "pizza"], //buttons
        answer: ["sky"]
    },
    {
        //questionNumber: "2",
        questionWording: "2. What is a plaza?",
        choices: ["rice", "tile", "cheese"],
        answer: ["pizza"]
    },
    {
        //questionNumber: "3",
        questionWording: "3. What is a bear?",
        choices: ["carrot", "sky", "pizza"],
        answer: ["sky"]
    },
    {
        //questionNumber: "4",
        questionWording: "4. What is a cat?",
        choices: ["carrot", "sky", "pizza"],
        answer: ["pizza"]
    },
    {
        //questionNumber: "5",
        questionWording: "5. What is a waffle?",
        choices: ["carrot", "sky", "pizza"],
        answer: ["sky"]
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