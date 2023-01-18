//Variables to get elements by ID
var timerEl = document.getElementById("time");
var startScreenEl = document.getElementById("start-screen");
var startButtonEl = document.getElementById("start");
var questEl = document.getElementById("questions");
var titleEl = document.getElementById("question-title");
var choicesEl = document.getElementById("choices");
var endEl = document.getElementById("end-screen");
var scoreEl = document.getElementById("final-score");
var initialsInput = document.getElementById("initials");
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

//A variable to set time that's left (it will also be the user score)
var timeLeft = 75;

//A variable for question number
var currentQuestIndex = 0;

//EventListener to begin quiz and to display feedback
startButtonEl.addEventListener("click", beginQuiz);
//EventListener to display feedback
for (var i = 0; i < optItems.length; i++) {
  optItems[i].addEventListener("click", displayFeedback);
}

//Function to begin quiz
function beginQuiz() {
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      initialSubmit();
    }
  }, 1000);
  function pauseTimer(){
    clearInterval(timeInterval);
  }
  beginQuiz.pauseTimer = pauseTimer
  startScreenEl.remove();
  displayQuestion();
}

//Function to display quiz questions
function displayQuestion(){
  questEl.setAttribute("class", "display");
  var question = questList[currentQuestIndex];
  titleEl.textContent = question.title;
  for (var i = 0; i < optItems.length; i++) {
    choicesEl.appendChild(optItems[i]);
    optItems[i].textContent = question.choices[i];
  }
}

//Function to display initials submit form
function initialSubmit () {
  questEl.remove();
    feedbackEl.remove();
    endEl.setAttribute("class", "display");
    beginQuiz.pauseTimer();
    scoreEl.textContent = timeLeft;
}

//Function to cycle on to next question
function nextQuestion (){
  currentQuestIndex = currentQuestIndex+1;
  if(currentQuestIndex < questList.length && timeLeft !== 0){
  displayQuestion();
  }else{
    initialSubmit();
  }
 }

//Function to display question feedback
function displayFeedback(event) {
  var userAnswer = event.target.id;
  feedbackEl.setAttribute("class", "feedback");
  if (userAnswer == questList[currentQuestIndex].correctAns){
    feedbackEl.textContent = "Correct!";
    correctAudio();
  }else{
    feedbackEl.textContent = "Wrong!";
    incorrectAudio();
    if (timeLeft >= 10) {
      timeLeft = timeLeft-10;
    } else {
      timeLeft = 0;
    }
  }
  nextQuestion();
 }

 //Function to play 'correct!' sound
 function correctAudio() {
  var audio = new Audio('./assets/sfx/correct.wav');
  audio.play();
}

//Function to play 'wrong!' sound
function incorrectAudio() {
  var audio = new Audio('./assets/sfx/incorrect.wav');
  audio.play();
}

//Event listener to store user initials and scores
submitButtonEl.addEventListener("click", function(event){
  event.preventDefault();
  saveScore();
  window.location.href = "./pages/highscores.html";
});

//A function to save player scores
function saveScore() {
var newScore = {
  initials: initialsInput.value,
  score: timeLeft
}
var allScores = JSON.parse(localStorage.getItem("scores")) || []
allScores.push(newScore);
localStorage.setItem("scores", JSON.stringify(allScores));
}

