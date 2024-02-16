// creating variables for scores
let myScore = document.querySelector("#myScore");
let compScore = document.querySelector("#compScore");


// exact score counts
myScoreValue=myScore.innerText;
compScoreValue=compScore.innerText;


//creating variables for images(will be used after the selection)
let chRock = document.querySelector("#rock");
let chPaper = document.querySelector("#paper");
let chScissors = document.querySelector("#scissors");


//creating variable for output verdict(will be used for continues updation)
let scoreDisplay = document.querySelector(".display-message");


// event listeners
chRock.addEventListener("click", () => compareUserInput("rock"))
chPaper.addEventListener("click", () => compareUserInput("paper"))
chScissors.addEventListener("click", () => compareUserInput("scissors"))


// function to generate computer's choice
itemsList = ["rock", "paper", "scissors"];


const compInput = () => {
    ch1 = Math.floor(Math.random() * 3);
    ch2 = itemsList[ch1];
    return ch2;
}


// function with game rules
const compareUserInput = (userChoice) => {
    compChoice = compInput();
    if (compChoice === userChoice) {
        console.log("It's a tie");
        scoreDisplay.textContent = "It's a tie";
        scoreDisplay.classList.remove("success", "failure");
        scoreDisplay.classList.add("tie");
    } else if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ) {
        console.log("You win !! :)");
        scoreDisplay.textContent = "You win !! :)";
        scoreDisplay.classList.remove("failure", "tie");
        scoreDisplay.classList.add("success");
        myScore.innerText++;
    } else {
        console.log("You Lose !! :(");
        scoreDisplay.textContent = "You Lose !! :(";
        scoreDisplay.classList.remove("tie", "success");
        scoreDisplay.classList.add("failure");
        compScore.innerText++;
    }
};



