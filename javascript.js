const options = ["rock", "paper", "scissors"]
let userChoice = "default"
let computerChoice = "default"
let userScore = 0;
let compScore = 0;
function getComputerChoice(){
    computerChoice = Math.floor(Math.random()*3)
    // console.log(options[computerChoice])
}

radioHandler = (e)=>{
    if($(e).prop("checked")){
      $("#submitBtn").removeAttr('disabled')
    }
  }


function playGame(){
    var choice = document.getElementsByName('game');

        for(i=0; i< choice.length; i++){
            if(choice[i].checked){
                userChoice = i
                choice[i].checked = false 
                break;
                
            }
        }
        getComputerChoice();
        console.log(options[computerChoice],options[userChoice])
        calcResult()
        
    
}

function calcResult(){
    if(typeof computerChoice !== undefined && typeof userChoice !== undefined){
        if(computerChoice == userChoice){
            console.log("TIE")
        }else if(computerChoice == 0){
            if(userChoice == 1){
                console.log("User WINS")
                userScore++
            }else{
                console.log("Computer WINS")
                compScore++ 
            }
        }else if(computerChoice == 1){
            if (userChoice == 0){
                console.log("Computer WINS") 
                compScore++
            }else{
                console.log("User WINS") 
                userScore++
            }
        }else{
            if (userChoice == 0){
                console.log("User WINS") 
                userScore++
            }else{
                console.log("Computer WINS") 
                compScore++
            } 
        }

        document.getElementById("user-score").innerHTML = "User Score: "+userScore
        document.getElementById("comp-score").innerHTML = "Computer Score: "+compScore
        document.getElementById("submitBtn").disabled = true
        
    }
}