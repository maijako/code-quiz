//set variables to get elements from doc
var highscoresLi = document.getElementById("highscores");
var clearButtonEl = document.getElementById("clear");

//get the scores object from local storage
var localHighScores = localStorage.getItem("scores");

//stringify it
var highestScores = JSON.parse(localHighScores);

//sort the list so that the highest score appears first
highestScores.sort(function(a,b){return a.score - b.score});
highestScores.reverse();

//A for loop to add a list element for each player with their scores and initials displayed
for(var i=0; i<highestScores.length; i++){
    var listItem = document.createElement("li");
    listItem.textContent = highestScores[i].initials+" - "+highestScores[i].score+" 🏆";
    highscoresLi.appendChild(listItem);
}

//Function to clear highscores
function clearHighScores() {
    localStorage.clear();
    highscoresLi.remove();
}
clearButtonEl.addEventListener("click", clearHighScores);

