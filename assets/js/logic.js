//Variables to get elements by ID
var timerEl = document.getElementById("time");
var startScreenEl = document.getElementById("start-screen");
var startButtonEl = document.getElementById("start");
var questEl = document.getElementById("questions");
var titleEl = document.getElementById("question-title");
var choicesEl = document.getElementById("choices");
var endEl = document.getElementById("end-screen");
var scoreEl = document.getElementById("final-score");
var playerInitEl = document.getElementById("initials");
var submitButtonEl = document.getElementById("submit");
var feedbackEl = document.getElementById("feedback");

//Variables to create button elements for options
var opt1 = document.createElement("button");
var opt2 = document.createElement("button");
var opt3 = document.createElement("button");
var opt4 = document.createElement("button");

//An array of option buttons
var optItems = [opt1, opt2, opt3, opt4];

//Eventlistener
startButtonEl.addEventListener("click", beginQuiz);

//Function to begin quiz
function beginQuiz() {
  var timeLeft = 75;
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;
      if(timeLeft === 0) {
        clearInterval(timeInterval);
      }
      }, 1000);
  startScreenEl.remove();
  displayQuestion();
}

//Function to display quiz questions 1 by 1
function displayQuestion () {
  questEl.setAttribute("class", "display");
  for (var i = 0; i < optItems.length; i++){
    choicesEl.appendChild(optItems[i]);
    for (var k = 0; k < questList.length; k++) {
      titleEl.textContent = questList[k].title
      optItems[i].textContent = questList[k].choices[i];
    }
  }
  questList.length = questList.length-1;
}

//Event listeners for option buttons
for (i = 0; i < optItems.length; i++){
optItems[i].addEventListener("click", displayQuestion);
}



//Logic to display question feedback
function displayFeedback () {
  feedbackEl.setAttribute("class", "feedback");
  if( ){
    feedbackEl.textContent = "Correct!"
  } else {
    feedbackEl.textContent = "Wrong!"
    //add timer to remove 10 seconds
  }
}



//remember to add sounds to feedback if right or wrong
//Event listeners to display feedback
for (i = 0; i < optItems.length; i++){
  optItems[i].addEventListener("click", displayFeedback);
  }

