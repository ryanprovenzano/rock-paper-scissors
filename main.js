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
};

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
  return choice;
}

let computerSelection = getComputerChoice();
let userSelection = getUserChoice();
