
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

function playRound () {
    for (let i = 0; i < 5; i++) {
        singleRound ()
     }
}

function singleRound () {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();

    console.log(computerSelection);
    console.log(playerSelection);

   if (playerSelection === computerSelection) {
        return "Unentschieden";
   }

   else if  (playerSelection === "Paper" && computerSelection === "Rock") {
        return "Punkt fuer den Spieler!"
    }

    else if  (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "Punkt fuer den Computer!"
    }

    else if  (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "Punkt fuer den Computer!"
    }

   else if  (playerSelection === "Scissors" && computerSelection === "Paper") {
         return "Punkt fuer den Spieler!"
    }

    else if  (playerSelection === "Rock" && computerSelection === "Paper") {
        return "Punkt fuer den Computer!"
   }

   else if  (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "Punkt fuer den Spieler!"
}

}

function game(){
    for (let i = 0; i < 5; i++) {
    console.log(singleRound());
 }
}


console.log(game())