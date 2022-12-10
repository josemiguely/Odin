let choices = ["rock","paper","scissors"];
let numOfChoices = choices.length;

//Using arrow functions to practice them
let getComputerChoice = () => {
    let posChoice = Math.floor(Math.random()*(numOfChoices));   
    return posChoice;
}


function playRound(playerSelection,computerSelection){
    
    playerSelection=choices.indexOf(playerSelection.toLowerCase());
    let mssge = `You chose ${choices[playerSelection]} and the computer chose ${choices[computerSelection]}`;

    if (playerSelection>choices.length-1 || playerSelection<0){
        console.log(`Invalid input, please choose Rock, Paper or Scissors`)
        return 0;
    }

    if (playerSelection-computerSelection===1 || (playerSelection<computerSelection && (computerSelection+1)%numOfChoices===playerSelection)){
         console.log(`Congratulations!!`);
         console.log(mssge);
         return 1;
    }

    else if (playerSelection==computerSelection){
        console.log(`Tie!!`);
        console.log(mssge);
        return 0;
    }

    else {
        console.log(`You loss!!`);
        console.log(mssge);
        return -1;
    }

    

}

//Main program
const numberOfGames = prompt("How many games you want to play?")
if (numberOfGames<0 || !(Number.isInteger(parseInt(numberOfGames)))){
    console.log("Please input a valid number");   
}

else{

let wins=0;
for (let i=0;i<numberOfGames;i++){
    const input = prompt("What is you choice?");
    const res=playRound(input,getComputerChoice())
    wins+=res;
}

if (wins>0) console.log(`You won ${Math.abs(wins)} more game than the computer`);
else if (wins==0) console.log('You tied against the computer');
else console.log(`You lost ${Math.abs(wins)} more game than the computer`);
}