let hands ={
    paper : "✋",
    rock : "✊",
    scissor : "✌️" 
}
let playerScore = 0;
let computerScore = 0;
let computerHand = null;
let playerHand = null;
let handList = Object.keys(hands);
let computerHandDiv = document.querySelector("#ComputerHand");
let playerHandDiv = document.querySelector("#userHand");
let playerScoreDiv = document.querySelector("#userScore");
let computerScoreDiv = document.querySelector("#computerScore");
let choices = document.querySelectorAll(".choice");
choices.forEach(choice => {
    choice.onclick = function(){
        console.log(hands[this.dataset.hand]);
        playerHand = this.dataset.hand;
        let randomIndex = Math.floor(Math.random() * handList.length);
        computerHand = handList[randomIndex];
        computerHandDiv.textContent =hands[computerHand];
        playerHandDiv.textContent = hands[playerHand];
        console.log(playerHand);
        playGame(playerHand, computerHand);
    }
}
);
function playGame(playerHand, computerHand){
    if(playerHand == computerHand){
       return
    }else if((playerHand == "rock" && computerHand == "scissor") || (playerHand == "paper" && computerHand == "rock") || (playerHand == "scissor" && computerHand == "paper")){
        playerScore++;
        playerScoreDiv.innerHTML = '<i class="fa fa-user"></i> ' + playerScore;
        
    }else{
        computerScore++;
        computerScoreDiv.innerHTML = '<i class="fa fa-desktop"></i> ' + computerScore;
    }
   
}
