// pointers to html elements
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var startEl = document.getElementById("start");
var answer01El = document.getElementById("button1");
var answer02El = document.getElementById("button2");
var answer03El = document.getElementById("button3");
var answer04El = document.getElementById("button4");
var selection;
var score = 0;
var question01El = document.querySelector(".question1");
var secondsLeft = 5;
var questions = [
    { q: "A data structure is a particular way of __________ data in a computer.", a: "organizing", answers: ["organizing", "cleaning", "stripping", "losing"] },
    { q: "Which sorting method is slowest?", a: "Bogosort", answers: ["bogosort", "quicksort", "mergesort", "bubblesort"] },
    { q: "A Binary Tree is a ______ data structure in which each node has 2 children", a: "tree", answers: ["tree", "leaf", "stick", "singular"] },
    { q: "Which programming language is considered a script language", a: "javascript", answers: ["javascript", "java", "C", "C#"] },
    { q: "Which programming language is older?", a: "C", answers: ["C", "ADA", "C++", "java"] },
    { q: "What does \"CS\"stand for ?", a: "Computer Science", answers: ["Computer Science", "Computer Stuff", "Computer Staff", "Computa set"] },
    { q: "A class is a ________ from which objects are created.", a: "blueprint", answers: ["blueprint", "graph", "scale", "function"] }];


//function that sets time and displays on screen
function setTime() {

    //set interval function
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left till game ends.";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            //sendMessage(); displays message at end of game
        }

    }, 1000);
}

//function that displays the questions


//function that starts the game
function start() {

    setTime(); //set timer

    //iterate through the questions
    for (var i = 0; i < questions.length; i++) {

        //display questions here
        question01El.textContent = questions[i].q;


        //display answers in a button
        answer01El.innerText = questions[i].answers[0];
        answer02El.innerText = questions[i].answers[1];
        answer03El.innerText = questions[i].answers[2];
        answer04El.innerText = questions[i].answers[3];



    };
}
console.log(questions[0].answers[0]);
function compareAnswers() {
    if (questions[i].a === selection) {
        score += 5;
    }
    else {
        score -= 2;
    }

}


//function that clears message and displays a picture onscreen
function sendMessage() {
    timeEl.textContent = " ";

    var imgEl = document.createElement("img");

    imgEl.setAttribute("src", "assets/congrats.png");
    mainEl.appendChild(imgEl);

}

//event listener for start
startEl.addEventListener("click", start);
//selection.addEventListener("button", compareAnswers);

