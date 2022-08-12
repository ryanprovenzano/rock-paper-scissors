
function getComputerChoice(){
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

function getUserChoice(){
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



function playRound(playerSelection, computerSelection){
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

let computerSelection = getComputerChoice();
let userSelection = getUserChoice();
console.log(playRound(userSelection, computerSelection));
