// Function to handle player's choice and game logic
function playerChoice(playerSelection) {
  const choices = ["rock", "paper", "scissors"];
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];

  // Display choices
  document.getElementById("player-choice").textContent = capitalize(playerSelection);
  document.getElementById("computer-choice").textContent = capitalize(computerSelection);

  // Determine the result
  let result = "";
  if (playerSelection === computerSelection) {
    result = "It's a draw!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result = "You win!";
  } else {
    result = "Computer wins!";
  }

  // Display the result
  document.getElementById("result").textContent = result;
}

// Function to capitalize the first letter of a string
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
