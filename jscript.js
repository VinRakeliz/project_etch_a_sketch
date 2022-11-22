
function capitalizeFirstLetter(string) 
{
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
function getComputerChoice () {
    let rndInt = Math.floor(Math.random() * 3);

    if (rndInt === 0) {
        computerSelection = "Rock";
    } 

    else if (rndInt === 1) {
        computerSelection = "Paper";
    } 

    else if (rndInt === 2) {
        computerSelection = "Scissors";
    } 

    return computerSelection
    
}

function getPlayerChoice () {
    var playerSelection = capitalizeFirstLetter(prompt("Rock, Paper or Scissors? Please enter your choice:"));
    while (playerSelection != "Rock" && playerSelection != "Scissors" && playerSelection != "Paper") {
    var playerSelection = capitalizeFirstLetter(prompt("Error, please enter a valid choice:"));
    }

    return playerSelection;

    
}

console.log(getPlayerChoice())