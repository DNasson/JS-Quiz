var startButton = document.querySelector(".start");
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var questionContainer = document.getElementById('question-container');
var answersContainer = document.getElementById('answer-container');
var answerButtons = document.querySelectorAll('button[class="answers"]');
//console.log('answerButtons is', answerButtons);
var userScore = 0;
var questionIndex = 0;
// Quiz questions and answers
var jsQuiz = [
    {
        question: "What can be done on a webpage with JavaScript?",
        answers: [
            'Click a button',
            'Retrieve data',
            'Fill out a form',
            'All of the above',
        ],
        correctAnswer: 'All of the above'
    },
    {
        question: "What is a list of items surrounded by quotation marks called?",
        answers: [
            'a list',
            'a lyric',
            'a string',
            'an array',
    ],

        correctAnswer: 'a string',
    },
    {
        question: "How can the number 5 be added to a variable?",
        answers: [
            '5',
            '"Five"',
            'Not possible, only letters are variables',
            'a and b',
        ],

        correctAnswer: 'a and b',
    },
    {
        question: "How do you call a function?",
        answers: [
            'console.log',
            'Hey, function!',
            'Open Sesame!',
            'It is automatically called when defined',
        ],

        correctAnswer: 'console.log',
    },
    {
        question: "What do you open in DevTools to see output for JavaScript?",
        answers: [
            'Styles',
            'Console',
            'Performance',
            'Recorder',
        ],

        correctAnswer: 'Console',
    },
]

myFunctionA = function () {
    console.log('a')
}
myFunctionB = function () {
    console.log('b')
}
myFunctionC = function () {
    console.log('c')
}
myFunctionD = function () {
    console.log('d')
}
// save button push in local storage
var count = localStorage.getItem("letters");
var aButton = document.querySelector("#a");
aButton.addEventListener("click", function () {
    localStorage.setItem("letters", "a")
}
)
// seconds in count down
var secondsLeft = 30;
// shows question from hidden state and pulls questions and answers to main screen
function showQuestion () {
    questionContainer.classList.remove('hide');
    answersContainer.classList.remove('hide');
    questionContainer.textContent = jsQuiz[questionIndex]['question'];
    for(let i = 0; i < 4; i++ ){
        answerButtons[i].textContent = jsQuiz[questionIndex]['answers'][i];

    }
}
// checks if answer is correct and adds 5 points for correct answers
function checkUserAnswer(e) {
    const thingClickedOn = e.target;
    if(thingClickedOn.matches('button')) {
        thingClickedOn.textContent == jsQuiz[questionIndex]['correctAnswer'] ? userScore = userScore + 5 : null;
        console.log('userScore is now', userScore);
    }
    // increment my index now
    questionIndex++;
    showQuestion();
}
// event listeners
answersContainer.addEventListener("click", checkUserAnswer);
startButton.addEventListener("click", showQuestion);
startButton.addEventListener("click", function () {
    event.preventDefault();
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left in quiz.";
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}) 