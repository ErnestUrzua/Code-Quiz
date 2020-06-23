// pointers to html elements
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var startEl = document.getElementById("start");
var secondsLeft = 30;
var questions = [
    { q: "What is a data structure?", a: "a particular way of organizing data in a computer so that it can be used effectively." },
    { q: "Which sorting method is slowest?", a: "Bogosort" },
    { q: "What is a Binary Tree?", a: "a tree data structure in which each node has at most two children, which are referred to as the left child and the right child." },
    { q: "Which programming language is considered a script language", a: "javascript" },
    { q: "Which programming language is older?", a: "C" },
    { q: "What does \"CS\"stand for ?", a: "Computer Science" },
    { q: "What is a class?", a: "A class is a blueprint from which objects are created. A class contains methods and variables associated with an instance of a class." }]


//function that starts the game
function start() {
    
    setTime(); //set timer
}

//function that sets time and displays on screen
function setTime() {

    //set interval function
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left till game ends.";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
}

//function that clears message and displays a picture onscreen
function sendMessage() {
    timeEl.textContent = " ";

    var imgEl = document.createElement("img");

    imgEl.setAttribute("src", "assets/fillin.jpg");
    mainEl.appendChild(imgEl);

}

//event listener for start
startEl.addEventListener("click",start);
