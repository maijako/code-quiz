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
opt1.setAttribute("id", 0);
opt2.setAttribute("id", 1);
opt3.setAttribute("id", 2);
opt4.setAttribute("id", 3);
//An array of option buttons
var optItems = [opt1, opt2, opt3, opt4];

//A variable for question number
var currentQuestIndex = 0;

//Eventlistener:
//To begin quiz
startButtonEl.addEventListener("click", beginQuiz);
//To display feedback
for (var i = 0; i < optItems.length; i++) {
  optItems[i].addEventListener("click", displayFeedback);
}

//Function to begin quiz
function beginQuiz() {
  var timeLeft = 75;
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
  startScreenEl.remove();
  displayQuestion();
}

//Function to display quiz questions
function displayQuestion(){
  questEl.setAttribute("class", "display");
  let question = questList[currentQuestIndex];
  titleEl.textContent = question.title;
  
  for (var i = 0; i < optItems.length; i++) {
    choicesEl.appendChild(optItems[i]);
    optItems[i].textContent = question.choices[i];
  }
}

//Function to cycle on to next question
function nextQuestion (){
  currentQuestIndex = currentQuestIndex+1;
  if(currentQuestIndex < questList.length){
  displayQuestion();
  }else{
    questEl.remove();
    feedbackEl.remove();
    endEl.setAttribute("class", "display");
    //stop timer
  }
 }

//Function to display question feedback
function displayFeedback(event) {
  var userAnswer = event.target.id;
  feedbackEl.setAttribute("class", "feedback");
  if (userAnswer == questList[currentQuestIndex].correctAns){
    feedbackEl.textContent = "Correct!"
  }else{
    feedbackEl.textContent = "Wrong!"
    //-10 seconds from timer
  }
  nextQuestion();
 }


//remember to add sounds to feedback if right or wrong
//timer to stop when questions stop


