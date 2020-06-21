// pointers to html elements
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var startEl = document.getElementById("start");
var secondsLeft = 30;


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
