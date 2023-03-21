var jsQuiz = [
    {
        question: "What can be done on a webpage with JavaScript?",
        answers: {
            a: 'Click a button',
            b: 'Retrieve data',
            c: 'Fill out a form',
            d: 'All of the above',
        },

        correctAnswer: 'd'
    },

    {
        question: "What is a list of items surrounded by quotation marks called?",
        answers: {
            a: 'a list',
            b: 'a lyric',
            c: 'a string',
            d: 'an array',
        },

        correctAnswer: 'c',
    },

    {
        question: "How can the number 5 be added to a variable?",
        answers: {
            a: '5',
            b: '"Five"',
            c: 'Not possible, only letters are variables',
            d: 'a and b',
        },

        correctAnswer: 'd',
    },

    {
        question: "How do you call a function?",
        answers: {
            a: 'console.log',
            b: 'Hey, function!',
            c: 'Open Sesame!',
            d: 'It is automatically called when defined',
        },

        correctAnswer: 'a',
    },

    {
        question: "What do you open in DevTools to see output for JavaScript?",
        answers: {
            a: 'Styles',
            b: 'Console',
            c: 'Performance',
            d: 'Recorder',
        },

        correctAnswer: 'b',
    },
]

myFunctionA=function(){
    console.log('a')
} 
myFunctionB=function(){
    console.log('b')
} 
myFunctionC=function(){
    console.log('c')
} 
myFunctionD=function(){
    console.log('d')
} 
var count = localStorage.getItem("letters");

var aButton = document.querySelector("#a");
aButton.addEventListener("click", function() {
    localStorage.setItem("letters", "a")
}
)
var score =0;

var timeEl = document.querySelector(".time");

var mainEl = document.getElementById("main");

var secondsLeft = 30;

function startTime() {
    // 
    var startButton = document.querySelector(".start");
    startButton.addEventListener("click", function() {
        var timerInterval = setInterval
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left in quiz.";
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }  
            
}, 1000)
        //   alert("Time is up!") 

}
startTime();
