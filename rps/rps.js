// creating variables for scores
var y=document.querySelector("#myScore");
var c=document.querySelector("#compScore");
var myScoreText = document.getElementById("myScore").textContent.trim();
var compScoreText = document.getElementById("compScore").textContent.trim();

var myScore = parseInt(myScoreText.match(/\d+/)[0]);
var compScore = parseInt(compScoreText.match(/\d+/)[0]);


// exact score counts

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

// funtion to update the displayed scores
const updateScoresDisplay = () => {
    document.getElementById("myScore").innerHTML = "<pre><b>You: " + myScore + "</b></pre>";
    document.getElementById("compScore").innerHTML = "<pre><b>Computer: " + compScore + "</b></pre>";
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
        myScore++;
        
    } else {
        console.log("You Lose !! :(");
        scoreDisplay.textContent = "You Lose !! :(";
        scoreDisplay.classList.remove("tie", "success");
        scoreDisplay.classList.add("failure");
        compScore++;
    }
    updateScoresDisplay();
};



