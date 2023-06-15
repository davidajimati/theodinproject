function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);

  if (num === 0) {
    return "rock";
  } else if (num === 1) {
    return "paper";
  } else {
    return "scissors"
  }
}

function getUserInput() {
  // const Unum = prompt("Enter option");
  return 'rock';
}

function play() {
  const userChoice = toLowerCase(getUserInput())
  const computerChoice = toLowerCase(getComputerChoice())

  switch (true) {
    case userChoice === computerChoice:
      console.log("It's a tie!");

    case userChoice == "rock" && computerChoice == "scissors":
      console.log("You win!\n\trock beats scissors");

    case userChoice == 'scissors' && computerChoice == 'paper':
      console.log("You win\n\tscissors cuts paper");

    case userChoice == 'paper' && computerChoice == 'rock':
      console.log("You win\n\tPaper Covers scissors");

  }
}
