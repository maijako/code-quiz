//set variables to get elements from doc
var highscoresLi = document.getElementById("highscores");
var clearButtonEl = document.getElementById("clear");



var player1 = document.createElement("li");
highscoresLi.appendChild(player1);
player1.textContent = localStorage.getItem("player");



