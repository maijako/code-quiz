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
//Function to start countdown
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
    startQuiz();
    displayOptions();
  }

//function to start quiz
  function startQuiz () {
    questions.setAttribute("class", "display");
    titleEl.textContent = quest1.title;
  }

  //function to create options buttons
  function displayOptions () {
    var listEl = document.createElement("ol");
    choicesEl.appendChild(listEl);
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
    var listItems = [li1, li2, li3, li4];
  for (var i = 0; i < 4; i++) {
    listItems[i].textContent = quest1.choices[i];
    listEl.appendChild(listItems[i]);
    };
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


  