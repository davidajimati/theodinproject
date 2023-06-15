function getComputerChoice () {
  const num = Math.floor(Math.random() * 3);

  if (num === 0) {
    return 'rock';
  } else if (num === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function getUserInput () {
  // const Unum = prompt("Enter option");
  return 'scissors';
}

function play () {
  const userChoice = getUserInput().toLowerCase();
  const computerChoice = getComputerChoice().toLowerCase();

  if (userChoice === 'rock' && computerChoice === 'scissors') {
    console.log('You win!\n\trock beats scissors');
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    console.log('You win\n\tscissors cuts paper');
  } else if (userChoice === 'paper' && computerChoice === 'rock') {
    console.log('You win\n\tPaper Covers scissors');
  } else if (computerChoice === 'rock' && userChoice === 'scissors') {
    console.log('You Lose!\n\trock beats scissors');
  } else if (computerChoice === 'scissors' && userChoice === 'paper') {
    console.log('You Lose!\n\tscissors cuts paper');
  } else if (computerChoice === 'paper' && userChoice === 'rock') {
    console.log('You Lose!\n\tPaper Covers scissors');
  } else {
    console.log("It's a tie!");
  }
}

play();
