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
    displayOptions();
  }
//function to display questions
  function displayQuestion () {
    questions.setAttribute("class", "display");
    titleEl.textContent = quest1.title; //add a for loop here to loop through the five questions in the questions js
  }

//function to display options within buttons
  function displayOptions () {
    var listEl = document.createElement("ol");
    choicesEl.appendChild(listEl);
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
    var listItems = [li1, li2, li3, li4];
  for (var i = 0; i < 4; i++) {
    listItems[i].textContent = quest1.choices[i]; //add a for loop here to loop through the five sets of options, and to put them all in buttons and add logic to change to next question onclick, and to reduce timer by 10 if wrong
    listEl.appendChild(listItems[i]);
    };
  }

  //and if statement or function somewhere to make timer cut by 10 seconds when the wrong option is selected;
  