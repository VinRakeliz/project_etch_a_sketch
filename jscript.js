

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

//function getPlayerChoice () {
//    var playerSelection = capitalizeFirstLetter(prompt("Rock, Paper or Scissors? Please enter your choice:"));
//    while (playerSelection != "Rock" && playerSelection != "Scissors" && playerSelection != "Paper") {
//    var playerSelection = capitalizeFirstLetter(prompt("Error, please enter a valid choice:"));
//    }

//    return playerSelection;

    
//}

//function playRound () {
//    for (let i = 0; i < 5; i++) {
//        singleRound ()
//     }
//}

function playRound (prompt) {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt;
    

    playerChoice.innerHTML = playerSelection;
    computerChoice.innerHTML = computerSelection;

   if (playerSelection === computerSelection) {
        return playRoundResult.innerHTML = "Unentschieden";
   }

   else if  (playerSelection === "Paper" && computerSelection === "Rock") {
        increasePlayerScore();
        checkScore();
        return playRoundResult.innerHTML = "Punkt fuer den Spieler!"
        
    }

    else if  (playerSelection === "Paper" && computerSelection === "Scissors") {
        increaseComputerScore();
        checkScore();
        return playRoundResult.innerHTML = "Punkt fuer den Computer!"


    }

    else if  (playerSelection === "Scissors" && computerSelection === "Rock") {
        increaseComputerScore();
        checkScore();
        return playRoundResult.innerHTML = "Punkt fuer den Computer!"
        

    }

   else if  (playerSelection === "Scissors" && computerSelection === "Paper") {
        increasePlayerScore();
        checkScore();
        return playRoundResult.innerHTML = "Punkt fuer den Spieler!"
    }

    else if  (playerSelection === "Rock" && computerSelection === "Paper") {
        increaseComputerScore();
        checkScore();
        return playRoundResult.innerHTML = "Punkt fuer den Computer!"

   }

   else if  (playerSelection === "Rock" && computerSelection === "Scissors") {
        increasePlayerScore();
        checkScore();
        return playRoundResult.innerHTML = "Punkt fuer den Spieler!"
}


}

function game(){
    let computerPoints = 0;
    let playerPoints = 0;

    for (let i = 0; i < 5; i++) 
    {
        var result = singleRound ()
        if (result == "Unentschieden") {
            console.log("Punktestand Spieler: " + playerPoints);
            console.log("Punktestand Computer: " + computerPoints);
        }
    
        else if (result == "Punkt fuer den Spieler!") {
            playerPoints++;
            console.log("Punktestand Spieler: " + playerPoints);
            console.log("Punktestand Computer: " + computerPoints);
    
        }
    
        else if (result == "Punkt fuer den Computer!") {
            computerPoints++;
            console.log("Punktestand Spieler: " + playerPoints);
            console.log("Punktestand Computer: " + computerPoints);
        }

    
    
    }

    if (playerPoints == computerPoints) {
        console.log("Unentschieden!")
    }

    else if (playerPoints < computerPoints) {
        console.log("Spieler gewinnt!")
    }

    else {
        console.log("Computer gewinnt!")
    }
}

function increasePlayerScore(){
playerScore ++;
document.getElementById("playerScore").textContent ++ ;
}

function increaseComputerScore(){
computerScore ++;
document.getElementById("computerScore").textContent ++ ;
}

const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");

rockButton.addEventListener("click", function () {playRound("Rock")});
paperButton.addEventListener("click", function () {playRound("Paper")});
scissorsButton.addEventListener("click", function () {playRound("Scissors")});

const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const playRoundResult = document.getElementById("playRoundResult");
var playerScore = document.getElementById("playerScore").textContent;
var computerScore = document.getElementById("computerScore").textContent;

function checkScore(){
    if (playerScore >= 5){
        alert("Spieler gewinnt")
        playerScore = 0;
        computerScore = 0;
        document.getElementById("playerScore").textContent = 0 ;
        document.getElementById("computerScore").textContent = 0 ;
    }
    else if (computerScore >= 5){
        alert("Computer gewinnt")  
        playerScore = 0;
        computerScore = 0;
        document.getElementById("playerScore").textContent = 0 ;
        document.getElementById("computerScore").textContent = 0 ;}
    
}




