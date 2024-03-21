let userScore = 0;
let compScore = 0;
let gameOver = false; 

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#com-score');

const generateComputerChoice = () => {
   const option = ["rock", "paper", "scissors"];
   const randIndex = Math.floor(Math.random() * 3);
   return option[randIndex];
};

const disableChoices = () => {
   
    choice.forEach(c => {
        c.style.pointerEvents = "none";
        c.style.opacity = "0.5"; 
    });
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win..  ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `Computer wins. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
    if (userScore === 3) {
        msg.innerText = `Congratulations! You've won the game!`;
        msg.style.backgroundColor = "gold";
        gameOver = true;
    } else if (compScore === 3) {
        msg.innerText = `Game over! The computer has won the game.`;
        msg.style.backgroundColor = "gold";
        gameOver = true;
    }

    if (gameOver) {
        disableChoices();
    }
};

const drawGame = () => {
    console.log("Draw game");
    msg.innerText = "Draw game, play again...";
    msg.style.backgroundColor = "#081b31";
};

const playGame = (userChoice) => {
    if (!gameOver) { 
        console.log("User Choice: " + userChoice);
        const compChoice = generateComputerChoice();
        console.log("Comp Choice: " + compChoice);

        if (userChoice === compChoice) {
            drawGame();
        } else {
            let userWin = true;
            if (userChoice === "rock") {
                userWin = compChoice === "paper" ? false : true;
            } else if (userChoice === "paper") {
                userWin = compChoice === 'scissors' ? false : true;
            } else {
                userWin = compChoice === 'rock' ? false : true;
            }
            showWinner(userWin, userChoice, compChoice);
        }
    }
};

choice.forEach(c => {
    c.addEventListener('click', () => {
        if (!gameOver) { 
            const userChoice = c.getAttribute('id');
            playGame(userChoice);
        }
    });
});
