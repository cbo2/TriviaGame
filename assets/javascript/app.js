// present question
// if answering right, congratulate
// if not right OR if time runs out tell them wrong answer or time ran out...show right answer
// either way, wait a few seconds, then disply the next question
// after the final question display stats right/wrong and option to start game again (without reloading page)

window.onload = function() {
    $(".button").on("click", processAnswer);
};

// This will be my array of qAndAEntry Objects
var qAndAList = [];

// this is the constructor for my qAndAEntry object
// It will house the question, the answer, and the 4 possible choices
function qAndAEntry(question, correctAnswer, choice1, choice2, choice3, choice4) {
    this.question = question;
    this.correctAnswer = correctAnswer;
    this.choice1 = choice1;
    this.choice2 = choice2;
    this.choice3 = choice3;
    this.choice4 = choice4; 
}

// Now, let's create some aAndAEntry Objects and stuff them into our array
qAndAList.push(new qAndAEntry("QUESTION 1", "RESPONSE 2", "RESPONSE 1", "RESPONSE 2", "RESPONSE 3", "RESPONSE 4"));
qAndAList.push(new qAndAEntry("Which sign does jQuery use as a shortcut for jQuery?",
                              "the $ sign", 
                              "the $ sign", 
                              "the % sign", 
                              "the ? Sign", 
                              "the # Sign"));
qAndAList.push(new qAndAEntry("What is the correct jQuery code to set the background color of all p elements to red",
                              '$("p").style("background-color","red");',
                              '$("p").css("background-color","red");',
                              '$("p").manipulate("background-color","red");',
                              '$("p").layout("background-color","red");',
                              '$("p").style("background-color","red");'));
qAndAList.push(new qAndAEntry("Which jQuery method is used to hide selected elements?",
                              'hide()',
                              'display(none)',
                              'hidden()',
                              'hide()',
                              'visible(false)'));
qAndAList.push(new qAndAEntry("What scripting language is jQuery written in?",
                              'JavaScript',
                              'C#',
                              'VBScript',
                              'C++',
                              'JavaScript'));

// TODO - remove later
for (i = 0; i < qAndAList.length; i++) {
    console.log("The question for iter: " + i + " is: " + qAndAList[i].question);
    console.log("The answer for iter: " + i + " is: " + qAndAList[i].correctAnswer);
}

var correct = 0;
var wrong = 0;
var remainingTime = 20;
var intervalId = 0;

$("#time").text(remainingTime);
console.log("remaining time is: " + remainingTime);


var currentIndex = 0;
var currentEntry = Object;

getNextQuestion();

function getNextQuestion() {
    currentEntry = qAndAList[currentIndex];
    $(".question").text(currentEntry.question);
    $("#answer1").text(currentEntry.choice1);
    $("#answer2").text(currentEntry.choice2);
    $("#answer3").text(currentEntry.choice3);
    $("#answer4").text(currentEntry.choice4);
    intervalId = setInterval(countdown, 1000);
    currentIndex++;   // bump it up for the next time this function is called
    if (currentIndex === qAndAList.length) {
        postFinals();
    }
}

// count down on our timer (based on seconds) and display it
function countdown() {
    remainingTime--;
    $("#time").text(remainingTime);
    if (remainingTime === 0) {
        clearInterval(intervalId);
        displayAndAutoCloseWindow(false, "assets/images/timesUp.gif");
    }
}

// push final right/wrong answers to the user
function postFinals() {
    alert("Totals.........Right [" + correct + "] Wrong [" + wrong + "]");
    reset();
}

function reset() {
    clearInterval(intervalId);
}

// Common function used by all 4 buttons.  Check the answer using generic 'this'
function processAnswer() {
    // since a button was clicked, either correct or wrong, no longer need the timer
    clearInterval(intervalId);

    // check if the right answer
    if ($(this).text() === currentEntry.correctAnswer) {
        displayAndAutoCloseWindow(true, "assets/images/thumbsUp.gif");
    } else {
        displayAndAutoCloseWindow(false, "assets/images/thumbsDown.gif");
    }
}

// this function needs to be async because it uses await and a promise
async function displayAndAutoCloseWindow(win, img) {
    myWindow = window.open(img, "", "top=200, left=200, width=400, height=400");
    await sleep(3000);
    myWindow.close();
    if (win) {
        correct++;
    } else {
        wrong++;
        alert("The correct answer is: " + currentEntry.correctAnswer);
    }
    // put the remainingTime back to 20 seconds to prepare for the next trivia question
    remainingTime = 20;
    $("#time").text(remainingTime);
    getNextQuestion();
}

// return after waiting/sleeping the passed in number of millis
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  