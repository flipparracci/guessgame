// Generate a random number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

// Get the HTML elements
const userGuessInput = document.getElementById("userGuess");
const messageElement = document.getElementById("message");

// Function to check the user's guess
function checkGuess() {
  const userGuess = parseInt(userGuessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    showMessage("Please enter a valid number between 1 and 10");
  } else {
    if (userGuess === secretNumber) {
      showMessage("Congratulations! You guessed the correct number!");
    } else {
      showMessage(`Wrong guess. Try again!`);
    }
  }

  // Clear the input field
  userGuessInput.value = "";
}

// Function to display messages
function showMessage(message) {
  messageElement.textContent = message;
}
