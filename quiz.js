//-------------------- COOKIES
//---------- set achieved level (on question fail)
function storeLevel(level) {
  document.cookie = userLevel + "=" + level + ";path=/";
}

//-------------------- QUIZ

var questionOne = document.getElementById("question-one"); // targets form for question one
var questionTwo = document.getElementById("question-two"); // targets form for question two
var questionThree = document.getElementById("question-three"); // targets form for question three
var questionFour = document.getElementById("question-four"); // etc
var questionFive = document.getElementById("question-five");
var questionSix = document.getElementById("question-six");
var questionSeven = document.getElementById("question-seven");
var questionEight = document.getElementById("question-eight");
var questionNine = document.getElementById("question-nine");
var questionTen = document.getElementById("question-ten");

var questionOne = document.getElementById("answer-one"); // targets form for answer one
var questionTwo = document.getElementById("answer-two"); // targets form for answer two
var questionThree = document.getElementById("answer-three"); // targets form for answer three
var questionFour = document.getElementById("answer-four"); // etc
var questionFive = document.getElementById("answer-five");
var questionSix = document.getElementById("answer-six");
var questionSeven = document.getElementById("answer-seven");
var questionEight = document.getElementById("answer-eight");
var questionNine = document.getElementById("answer-nine");
var questionTen = document.getElementById("answer-ten");

function runQuiz(){ // run master function on page load

// default userLevel
    let userLevel = 0
// default userScore
    let userScore = 0

// displays question
    function displayQuestion() {
// appends 1 to the question title on load
        document.getElementById("question-number").innerHTML += (userLevel + 1);
// asks question in typewriter text
        let i = 0
        let q1 = 'What is blockchain?'
        function typewriterWelcome(){
            setTimeout(function() {
                document.getElementById('question-one').innerHTML += q1.charAt(i);
                i++;
                if (i < q1.length) {
                    typewriterWelcome();
                }
            }, 100)
        }
        typewriterWelcome()
// timer fades in but doesn't begin

// unhides q1 (form/answers) after 3 seconds & starts timer
        setTimeout(function() {
            document.getElementById("answer-one").style.display = "block"
        }, 2500)
    }

// on click of submit button assess whether correct and adjust user level/score or run fail
    function assessAnswer() {
    }

    function failModal(userLevel, userScore) {
// on run displays modal by adding inner html to elements based on userLevel/userScore info saved in array
// modal also has button to begin quiz again reminding users of prize
    }

    function weHaveAWinner(userLevel, userScore) {
// takes user to winner's area & stores/overwrites cookie
    }

    displayQuestion()
}


document.addEventListener("DOMContentLoaded",
    runQuiz()
)