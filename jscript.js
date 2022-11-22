function getComputerChoice () {
    let rndInt = Math.floor(Math.random() * 3);

    if (rndInt === 0) {
        result = "Rock";
    } 

    else if (rndInt === 1) {
        result = "Paper";
    } 

    else if (rndInt === 2) {
        result = "Scissors";
    } 

    return result
    
}

console.log(getComputerChoice())