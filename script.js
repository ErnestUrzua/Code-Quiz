// pointers to html elements
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var startEl = document.getElementById("start");
var answer01El = document.getElementById("#button1");
var question01El = document.querySelector(".question1");
var secondsLeft =5;
var questions = [
    { q: "A data structure is a particular way of __________ data in a computer.", a: "organizing" },
    { q: "Which sorting method is slowest?", a: "Bogosort" },
    { q: "A Binary Tree is a ______ data structure in which each node has 2 children", a: "tree" },
    { q: "Which programming language is considered a script language", a: "javascript" },
    { q: "Which programming language is older?", a: "C" },
    { q: "What does \"CS\"stand for ?", a: "Computer Science" },
    { q: "A class is a ________ from which objects are created.", a: "blueprint" }]

var Answers1 = ["organizing,cleaning", "stripping", "losing"];
var Answers2 = ["bogosort", "quicksort", "mergesort", "bubblesort"];
var Answers3 = ["tree","leaf", "stick", "singular"];
var Answers4 = ["javascript","java", "C", "C#"];
var Answers5 = ["C","ADA", "C++", "java"];
var Answers6 = ["Computer Science", "Computer Stuff", "Computer Staff", "Computa set"];
var Answers7 = ["blueprint","graph", "scale", "function"];


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

    //display questions here
    question01El.textContent = questions[0].q;

    //display correct answer above a button
    console.log(questions[0].a);
    //answer01El.innerText = Answers1[0];
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
