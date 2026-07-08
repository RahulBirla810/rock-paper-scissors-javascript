// let userscore=0;
// let compscore=0;

// const choices =document.querySelectorAll(".choice");
// const msg=document.querySelector("#msg");

// const userScorepara=document.querySelector("#userscore");
// const compScorepara=document.querySelector("#compscore")

// const genComputerChoice=()=>{
//     const options =["rock","paper","scissor"];
//     const randmIdx= Math.floor(Math.random()*3);
//     return options[randmIdx];
// };
// const DrawGame =()=>{
//   msg.innerText="Game was draw, Play again"
//   msg.style.backgroundColor="#081b31";

// };

// const showWinner=(userWin,userchoice,compchoice)=>{
//    if (userWin){
//    userscore++;
//    userScorepara.innerText=userscore;
//     msg.innerText =`you win! Your ${userchoice} beats ${compchoice}`;
//     msg.style.backgroundColor="green";
//    }else{
//     compscore++;
//     compScorepara.innerText=compscore;
//     msg.innerText =`you lost! ${compchoice} beats Your ${userchoice}`;
//     msg.style.backgroundColor="red";

//    }
// };

// const PlayGame=(userchoice)=>{
// console.log("user choice =",userchoice);

// const compchoice= genComputerChoice();
// console.log("computer choice=" ,compchoice);

// if(userchoice===compchoice){
//     DrawGame();
// }else{
//     let userWin =true;
//     if(userchoice==="rock"){
//        userWin= compchoice==="paper"? false:true;
//     }else if(userchoice==="paper"){
//       userWin= compchoice==="scissor"? false:true; 
//     }else{
//         userWin=compchoice==="rock"? false:true;
//     }
//     showWinner(userWin,userchoice,compchoice);
// }

// };

// choices.forEach((choice)=>{
//     choice.addEventListener("click",()=>{
//     const userchoice =choice.getAttribute("id");
//     PlayGame(userchoice);
//     });
// });

let userScore = 0; // Initialize user score
let compScore = 0; // Initialize computer score

// Get all choice elements
const choices = document.querySelectorAll(".choice");
// Get the message element
const msg = document.querySelector("#msg");

// Get user score and computer score elements
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Function to generate a random choice for the computer
const genComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randmIdx = Math.floor(Math.random() * 3);
    return options[randmIdx];
};

// Function to handle a draw scenario
const drawGame = () => {
    msg.innerText = "Game was a draw, Play again!";
    msg.style.backgroundColor = "#081b31";
};

// Function to show the winner message and update scores
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore; // Update user score
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore; // Update computer score
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

// Main function to play the game
const playGame = (userChoice) => {
    console.log("User choice =", userChoice);

    const compChoice = genComputerChoice();
    console.log("Computer choice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

// Add click event listeners to each choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
