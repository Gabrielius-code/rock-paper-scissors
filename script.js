const rockPaperScissors = ["rock", "paper", "scissors"];
function randomOutput() {
  const randomGameOutput =
    rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
  return randomGameOutput;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerSection = prompt("Rock Paper or Scissors").toLowerCase();
    const computerSection = randomOutput();
    function playRound(playerSection, computerSection) {
      if (playerSection == "rock") {
        if (computerSection == "paper") {
          computerScore++;
          return "Computer won, paper beats rock";
        } else if (computerSection == "scissors") {
          playerScore++;
          return "You won, rock beats scissors";
        } else {
          return "Draw";
        }
      } else if (playerSection == "paper") {
        if (computerSection == "rock") {
          playerScore++;
          return "You won, paper beats rock";
        } else if (computerSection == "scissors") {
          computerScore++;
          return "Computer won, scissors beats paper";
        } else {
          return "Draw";
        }
      } else if (playerSection == "scissors") {
        if (computerSection == "rock") {
          computerScore++;
          return "Computer won, rock beats scissors";
        } else if (computerSection == "paper") {
          playerScore++;
          return "You won, scissors beats paper";
        } else {
          return "Draw";
        }
      }
    }
    console.log(playRound(playerSection, computerSection));
  }
  if (playerScore > computerScore) {
    console.log("You won!");
  } else if (computerScore > playerScore) {
    console.log("Computer won!");
  } else {
    console.log("Player and computer both got same wins count. TIED!");
  }
}

// const test = playRound(playerSection, computerSection);
game();
