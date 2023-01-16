//set variables to get elements from doc
var highscoresEl = document.getElementById("highscores");
var clearButtonEl = document.getElementById("clear");

//store user data from the remaining timer here
//create a box for user to input initials
//store user initials along with the score until data is cleared





//in class activity
//inputs
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
//outputs
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");


renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  // Fill in code here to retrieve the last email and password.
  // If they are null, return early from this function
  // Else set the text of the userEmailSpan and userPasswordSpan 
  // to the corresponding values form local storage
  var lastEmail = localStorage.getItem("email");
  var lastPassword = localStorage.getItem("password");
  if (lastEmail === null || lastPassword === null) {
    return;
  } else {
    userEmailSpan.textContent = lastEmail;
    userPasswordSpan.textContent = lastPassword;
  }
  
}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

  // Save email and password to localStorage and render the last registered.
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  renderLastRegistered();
  }
});