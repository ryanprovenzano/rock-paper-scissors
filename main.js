
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  switch (randomNum) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

function getUserChoice() {
  let choice = "";
  invalidChoice = true;
  while(invalidChoice){
    choice = prompt("Select your hand:");
    choiceLower = choice.toLowerCase();
    if (choiceLower === "rock" || choiceLower === "paper"
        || choiceLower === "scissors") {
        invalidChoice = false;
      }
  }
  return choice[0].toUpperCase() + choice.slice(1).toLowerCase(); //Format of string will be "Rock", "Paper", or "Scissors"
}



function playRound(playerSelection, computerSelection) {
  let roundResult = 0; // 0 means tie, -1 means loss, 1 means Win;
  if (playerSelection === computerSelection) {
    return [roundResult, `You Tied! You both selected ${playerSelection}`]
  } else {

      switch (playerSelection){
        case "Rock":
         roundResult = (computerSelection === "Paper")? -1: 1;
         break;
        case "Paper":
         roundResult = (computerSelection === "Scissors")? -1: 1;
         break;
        case "Scissors":
         roundResult = (computerSelection === "Rock")? -1: 1;
         break;
       }

  }
  return (roundResult == 1)?
    [roundResult, `You won! ${playerSelection} beats ${computerSelection}`] :
    [roundResult, `You lost! ${computerSelection} beats ${playerSelection}`];

}

function updateScores(result, scores) {
  if (result[0] === 1) return [ ++scores[0], scores[1] ]
  else if (result[0] === -1) return [ scores[0], ++scores[1] ]
  else return scores; // is a tie
  }



function printScores(scores) { // 1st element is your score, 2nd element is computer's
  console.log(`Your score: ${scores[0]}, Computer's score: ${scores[1]}`);
}

function game() {
  let roundCount = 0;
  let scores = [0, 0]; // 1st element is your score, 2nd element is computer's
  let computerSelection = "";
  let userSelection = "";
  console.log("Starting a 5-round game of Rock Paper Scissors");
  while(roundCount < 5  && scores[0] < 3 && scores[1] < 3){
    // Get selections from each player
    userSelection = getUserChoice();
    computerSelection = getComputerChoice();
    // Play round
    result = playRound(userSelection, computerSelection);
    scores = updateScores(result, scores);
    console.log(`Round ${roundCount + 1}`);
    console.log(result[1]);
    printScores(scores);
    roundCount++;
  }
  if (scores[0] > scores[1]) console.log("You win!");
  if (scores[0] < scores[1]) console.log("Computer wins!");
  else console.log("Tie! Nobody wins!");
}

game();
