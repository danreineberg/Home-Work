// user select rocks, paper or scissors by a prompt
function getUserChoice(){
	var userSelection = prompt("Do you choose rock, paper or scissors?");
	return userSelection;
}

// computer randomly selects rock paper or scissors
function getComputerChoice(){
	var computerSelection = Math.random();
	if (computerSelection < 0.34) {
	    computerSelection = "rock";
	} else if(computerSelection <= 0.67) {
	    computerSelection = "paper";
	} else {
	    computerSelection = "scissors";
	}
	return computerSelection;
}

// The getWinner function accepts two arguments.

function getWinner(computerSelection, userSelection){
	// Enter code here so that the getWinner function returns "User", "Computer", or "Tie"
	if (computerSelection === userSelection) {
	return "Tie";
} else if (computerSelection === "rock" && userSelection == "scissors") {
	return "Computer";
} else if (computerSelection === "paper" && userSelection == "rock") {
	return "Computer";
} else if (computerSelection === "scissors" && userSelection == "paper") {
	return "Computer";
} else {
	return "User";
}
}

function playGame(){
	var userChoice = getUserChoice();
	var computerChoice = getComputerChoice();
	var winner = getWinner(userChoice, computerChoice);
	alert("And the winner is..." + winner);
}

// // Uncomment the line below and the game will play
playGame();