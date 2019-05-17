

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if(userInput === 'rock' || userInput === 'paper' || userInput === 		   			'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Wrong Input')
  }
};

function getComputerChoice() {
   choice = Math.floor(Math.random() * 3);

  switch(choice){
    case 0:
   		return('rock');
      break;
    case 1:
      return('paper');
      break;
    case 2:
      return('scissors');
      break;
  }


}

function determineWinner(userChoice, computerChoice) {
  if(userChoice === computerChoice) {
    return 'The game was a tie.';
  }
  if(userChoice === 'rock') {
    if(computerChoice ==='paper') {
      return 'The computer won.';
    } else {
      return 'The user won.';
    }
  }
  if(userChoice === 'paper') {
    if(computerChoice ==='scissors') {
      return 'The computer won.';
    } else {
      return 'The user won.';
    }
  }

  if(userChoice === 'scissors') {
    if(computerChoice === 'rock') {
      return 'The computer won.';
    } else {
      return 'The user won.';
    }
  }

  if(userChoice === 'bomb') {
    if(computerChoice === 'rock' || computerChoice === 'scissors' ||af computerChoice === 'paper') {
    return 'The user won.';
  }
  }
}

function playGame() {
  let userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log(`You use: ${userChoice}`);
  console.log(`The computer uses: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}


playGame();
