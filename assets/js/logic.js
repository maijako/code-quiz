// Questions contain buttons for each answer.
// When answer is clicked, the next question appears
// If the answer clicked was incorrect then subtract time from the clock
// The quiz should end when all questions are answered or the timer reaches 0.
// When the game ends, it should display their score and give the user the ability to save
// their initials and their score

//Set variables
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


//Eventlistener
startButtonEl.addEventListener("click", countdown);
//This is the timer, and I want it to start when I click on the button (eventlistener)
function countdown() {
    var timeLeft = 75;
    var timeInterval = setInterval(function () {
      timeLeft--;
      timerEl.textContent = timeLeft;
        if(timeLeft === 0) {
          clearInterval(timeInterval);
        }
    }, 1000);
    startScreenEl.remove();
  }

//Function to display question after the start button is clicked
// function begin () {
    
//     var buttonEl = event.target;
//     if (buttonEl.matches("button")) {
//       var parentEl = buttonEl.parentElement;
//       var indexOfEl = parentEl.dataset.index;
//       todos.splice(indexOfEl, 1);
//       storeTodos();
//       renderTodos();
//     }
//   })


  