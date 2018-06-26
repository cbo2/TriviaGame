// present question
// if answering right, congratulate
// if not right OR if time runs out tell them wrong answer or time ran out...show right answer
// either way, wait a few seconcs, then disply the next question
// after the final question display stats right/wrong and option to start game again (without reloading page)

window.onload = function() {
    $("#answer1").on("click", answer1);
    $("#answer2").on("click", answer2);
    $("#answer3").on("click", answer3);
    $("#answer4").on("click", answer4);
};

var list = [
    {
        question: "Question 1",
        correctAnswer: "Response 3",
        answer1: "Response 1",
        answer2: "Response 2",
        answer3: "Response 3",
        answer4: "Response 4"
    },
    {
        question: "Which sign does jQuery use as a shortcut for jQuery?",
        correctAnswer: "the $ sign",
        answer1: "the $ sign",
        answer2: "the % sign",
        answer3: "the ? Sign",
        answer4: "the # Sign"
    },
    {
        question: "What is the correct jQuery code to set the background color of all p elements to red",
        correctAnswer: '$("p").style("background-color","red");',
        answer1: '$("p").css("background-color","red");',
        answer2: '$("p").manipulate("background-color","red");',
        answer3: '$("p").layout("background-color","red");',
        answer4: '$("p").style("background-color","red");'
    },
    {
        question: "Which jQuery method is used to hide selected elements?",
        correctAnswer: 'hide()',
        answer1: 'display(none)',
        answer2: 'hidden()',
        answer3: 'hide()',
        answer4: 'visible(false)'
    },
    {
        question: "What scripting language is jQuery written in?",
        correctAnswer: 'JavaScript',
        answer1: 'C#',
        answer2: 'VBScript',
        answer3: 'C++',
        answer4: 'JavaScript'
    }
]

// TODO - remove later
for (i = 0; i < list.length; i++) {
    console.log("The question for iter: " + i + " is: " + list[i].question);
    console.log("The answer for iter: " + i + " is: " + list[i].correctAnswer);
}


var remainingTime = 20;
$("#time").text(remainingTime);
console.log("remaining time is: " + remainingTime);
var intervalId = 0;
intervalId = setInterval(countdown, 1000);
function countdown() {
    remainingTime--;
    $("#time").text(remainingTime);
    console.log("remaining time is: " + remainingTime);
    if (remainingTime === 0) {
        clearInterval(intervalId);
    }
}

function answer1() {
    alert("you clicked on answer " + 1);
}

function answer2() {
    alert("you clicked on answer " + 2);
}

function answer3() {
    alert("you clicked on answer " + 3);
}

function answer4() {
    alert("you clicked on answer " + 4);
}