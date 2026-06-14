function getComputerChoice(max){
    let choice = Math.floor(Math.random() * max);
    if(choice == 0){
        return "rock";
    }
    else if(choice == 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}
console.log(getComputerChoice());


function getHumanChoice(){
    let choice = prompt("rock, paper, or scissors ");
    return choice
}

let humanscore = 0;
let computerscore = 0;

function playRound(humanChoice, computerChoice) {
  // your code here!
  humanChoice = humanChoice.toLowerCase();
  if(humanChoice == "rock" && computerChoice == "scissors"){
    console.log("you win! rock beats scissors");
    humanscore += 1;
  }
  else if(humanChoice == "scissors" && computerChoice == "rock"){
    console.log("you lose! rock beats scissors");
    computerscore += 1;
  }
  else if(humanChoice == "paper" && computerChoice == "scissors"){
    console.log("you lose! scissors beats paper");
    computerscore += 1;
  }
  else if(humanChoice == "scissors" && computerChoice == "paper"){
    console.log("you win! scissors beats paper");
    humanscore += 1;
  }
  else if(humanChoice == "rock" && computerChoice == "paper"){
    console.log("you lose! paper beats rock");
    computerscore += 1;
  }
  else if(humanChoice == "paper" && computerChoice == "rock"){
    console.log("you win! paper beats rock");
    humanscore += 1;
  }
  else{
    console.log("draw");
  }
}




function playgame(){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice(3);
    playRound(humanSelection, computerSelection);
    console.log(humanscore);
    console.log(computerscore);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice(3);
    playRound(humanSelection, computerSelection);
    console.log(humanscore);
    console.log(computerscore);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice(3);
    playRound(humanSelection, computerSelection);
    console.log(humanscore);
    console.log(computerscore);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice(3);
    playRound(humanSelection, computerSelection);
    console.log(humanscore);
    console.log(computerscore);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice(3);
    playRound(humanSelection, computerSelection);
    console.log(humanscore);
    console.log(computerscore);
}

playgame();