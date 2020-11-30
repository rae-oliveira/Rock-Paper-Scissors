const choices = ["Rock", "Paper", "Scissor"];
let result = "";
let userWins = 0;
let computerWins = 0;
const buttons = document.querySelectorAll('button.choice');

function computerPlay (array) {
    return array[Math.round(Math.random() * (array.length - 1))]
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})

function disable() {
    buttons.forEach(elem => {
        elem.disabled = true})
}

function playRound (userChoice) {

    computerChoice = computerPlay(choices);
    
    if (userChoice === computerChoice) {
        result = `Tie! <br><br> Computer Score: ${computerWins} <br> Your Score: ${userWins}`;

    } else if ((userChoice === "Paper" && computerChoice === "Rock") || 
                (userChoice === "Scissor" && computerChoice === "Paper") ||
                (userChoice === "Rock" && computerChoice === "Scissor")) {

        ++userWins;
        result = `You won! ${userChoice} beats ${computerChoice} <br><br> Computer Score: ${computerWins} <br> Your Score: ${userWins}`;
        
        if(userWins === 5) {
            result = `Congrats, you won the game! <br><br> Computer Score: ${computerWins} <br> Your Score: ${userWins}`;
            disable();
        }
    } else if ((userChoice === "Rock" && computerChoice === "Paper") || 
                (userChoice === "Paper" && computerChoice === "Scissor") ||
                (userChoice === "Scissor" && computerChoice === "Rock")){
        ++computerWins;
        result = `You lost! ${computerChoice} beats ${userChoice} <br><br> Computer Score: ${computerWins} <br> Your Score: ${userWins}`;

        if(computerWins === 5) {
            result = `I'm sorry, you lost the game. <br><br> Computer Score: ${computerWins} <br> Your Score: ${userWins}`;
            disable();
        }
    }

    document.getElementById('result').innerHTML = result;

    return result;
}