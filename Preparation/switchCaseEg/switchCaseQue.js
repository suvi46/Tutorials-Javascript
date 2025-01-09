//Game: Rock, Paper, Scissors Write a function playGame(playerChoice) where the computer randomly selects "rock", "paper", or "scissors". Use a switch-case to determine the winner.

function playGame(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log(`Player Choice: ${playerChoice}`);
  console.log(`Computer Choice: ${computerChoice}`);

  switch (playerChoice) {
    case "rock":
      switch (computerChoice) {
        case "rock":
          return "it's a tie";
        case "paper":
          return "computer wins";
        case "scissors":
          return "you win";
      }
      break;

    case "paper":
      switch (computerChoice) {
        case "rock":
          return "You win!";
        case "paper":
          return "It's a tie!";
        case "scissors":
          return "Computer wins!";
      }
      break;

    case "scissors":
      switch (computerChoice) {
        case "rock":
          return "Computer wins!";
        case "paper":
          return "You win!";
        case "scissors":
          return "It's a tie!";
      }
      break;

    default:
      return "Invalid choice! Please select rock, paper, or scissors.";
  }
}
console.log(playGame("rock"));
console.log(playGame("paper"));
console.log(playGame("scissors"));
console.log(playGame("rock1"));

function getSeason(month) {
  switch (month) {
    case 12:
    case 1:
    case 2:
      return "Winter";
    case 3:
    case 4:
    case 5:
      return "Spring";
    case 6:
    case 7:
    case 8:
      return "Summer";
    case 9:
    case 10:
    case 11:
      return "Autumn";
    default:
      return "Invalid month";
  }
}

console.log(getSeason(1)); // "Spring"
console.log(getSeason(11)); // "Autumn"


