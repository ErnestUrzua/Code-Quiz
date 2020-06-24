// pointers to html elements
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var startEl = document.getElementById("start");
var button1El = document.getElementById("button1");
var button2El = document.getElementById("button2");
var button3El = document.getElementById("button3");
var button4El = document.getElementById("button4");
var scoreEl = document.getElementById("score")
var selection;
var score = 0;
var questions1El = document.querySelector(".question1");
var secondsLeft = 30;
var currentIndex = 0;

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
            endGame(); //displays message at end of game
        }

    }, 1000);
}


//function that starts the game
function start() {

    setTime(); //set timer

    //next question function
    next();
}

function compareAnswers(selection) {
    console.log(selection);

    if (questions[currentIndex].a === selection) {
        score += 5;
        scoreEl.textContent = score; //update score
    }
    else {
        score -= 2;
        secondsLeft = secondsLeft - 2;
        scoreEl.textContent = score; //update score
    }

    currentIndex++;
    //console.log("incremented index " + currentIndex + "-question length" + questions.length);
}

function next() {
    //console.log("current Index" + currentIndex);

    if (currentIndex < questions.length) {

        //display questions here
        questions1El.textContent = questions[currentIndex].q;

        //display answers in a button

        button1El.value = questions[currentIndex].answers[0];
        button2El.value = questions[currentIndex].answers[1];
        button3El.value = questions[currentIndex].answers[2];
        button4El.value = questions[currentIndex].answers[3];

        button1El.innerText = questions[currentIndex].answers[0];
        button2El.innerText = questions[currentIndex].answers[1];
        button3El.innerText = questions[currentIndex].answers[2];
        button4El.innerText = questions[currentIndex].answers[3];
    }
    else {
        //end game
        //endGame(); //currently interferes with timer ending
    }
}

//function that clears messages and displays a picture onscreen
function endGame() {
    questions1El.textContent = "Game Over";
    button1El.textContent = "";
    button2El.textContent = "";
    button3El.textContent = "";
    button4El.textContent = "";
    startEl.textContent = "";

    //append img to questions window
    var imgEl = document.createElement("img");
    imgEl.setAttribute("src", "assets/congrats.png");
    questions1El.appendChild(imgEl);

    
    //create item to append to high scores
    var highScoresEl = document.getElementById("highScores");
    var item = document.createElement("p");
    item.textContent = prompt("Enter Initals")+" : "+ score;//put score in item 
    
    //highScoresEl.setAttribute("visibility","visible");
    highScoresEl.append(item);
}

//possible reset button implementation
function reset() {
    location.reload();
}

//event listeners for start, and buttons
startEl.addEventListener("click", start);

button1El.addEventListener("click", function () {
    compareAnswers(this.value);//checks if the input is correct
    next(); //loads new questions
});

button2El.addEventListener("click", function () {
    compareAnswers(this.value);//checks if the input is correct
    next(); //loads new questions
});

button3El.addEventListener("click", function () {
    compareAnswers(this.value);//checks if the input is correct
    next(); //loads new questions
});

button4El.addEventListener("click", function () {
    compareAnswers(this.value);//checks if the input is correct
    next(); //loads new questions
});

