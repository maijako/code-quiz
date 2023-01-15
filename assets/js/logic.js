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
    questEl.setAttribute("class", "display");
    titleEl.textContent = quest1.title; //add a for loop here to loop through the five questions in the questions js, use the questList variable created in questions.js
  }

//function to display options within buttons
  // function displayOptions () {
  //   var opt1 = document.createElement("button");
  //   var opt2 = document.createElement("button");
  //   var opt3 = document.createElement("button");
  //   var opt4 = document.createElement("button");
  //   var optItems = [opt1, opt2, opt3, opt4];
  // for (var i = 0; i < 4; i++) {
  //   optItems[i].textContent = quest1.choices[i];
  //   choicesEl.appendChild(optItems[i]);
  //   };
  // }
 

  // function displayOptions on click of a button () {
    //a for loop to display all questions
    // for (var i = 0; i<questList.length; i++){
    //   questList[i];
    var opt1 = document.createElement("button");
    var opt2 = document.createElement("button");
    var opt3 = document.createElement("button");
    var opt4 = document.createElement("button");
    var optItems = [opt1, opt2, opt3, opt4];
    for (var i = 0; i < optItems.length; i++){
      optItems[i].textContent = questList[i].choices[i];
      console.log(questList[i].choices[i]);
    }
    // }
     


// //function to display next question when a button is clicked
// function nextQuestion() {
//   optItems.addEventListener("click", displayOptions);
// }



  // and add logic to change to next question onclick, and to reduce timer by 10 if wrong
  //and if statement or function somewhere to make timer cut by 10 seconds when the wrong option is selected;
