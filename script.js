let i=0;
let j=0;

function rock() {
   let input = "Rock";
   let comp = getComputerChoice();
   game(input,comp);
}

function paper() {
    let input = "Paper";
    let comp = getComputerChoice();
    game(input,comp);
    
 }
 
function scissors() {
    let input = "Scissors";
    let comp = getComputerChoice();
    game(input,comp);
 }
 
function getComputerChoice(){
    let point = Math.floor(Math.random()* 3);
    let comp;
    
    switch(point) {
        case 0: comp="Rock";
            return comp;

        case 1: comp="Paper";
             return comp;

        case 2: comp="Scissors";
             return comp;
    }

   
 }
function game(input,comp) {
    
    let result;
    
    if( input === comp ) {
        result = "It's a Tie";
        
        j-=1;
    }

    if( comp === "Rock" ) {
        if (input === "Paper") {
            result = "The player wins";
            i+=1;
        }

        else {
            if (input === "Scissors") 
            result="The computer wins";
            j+=1;
        }
    }

    if( comp === "Paper" ) {
        if (input === "Scissors") {
            result = "The player wins";
            i+=1;
        }

        else {
            if (input === "Rock") 
            result="The computer wins";
            j+=1;
        }
    }

    if( comp === "Scissors" ) {
        if (input === "Rock") {
            result = "The player wins";
            i+=1;
        }

        else {
            if (input === "Paper") 
            result="The computer wins";
            j+=1;
        }
    }

    if(i===5) {
        alert("You win this round!");
        i=0;
        j=0;
    }

    else {
        if(j===5) {
        alert("The computer wins this round");
        i=0;
        j=0;
        }
    }

    console.log(`${result}`);
    console.log(`Player :${i} , Computer ${j}`);
    displayScore(i,j);
    displayResult(result);
    

}

function displayResult(result) {
    document.querySelector(".result").innerHTML= `${result} `;

}

function displayScore(i,j) {
    document.querySelector(".ScoreDigitP").innerHTML= `${i}`;
    document.querySelector(".ScoreDigitC").innerHTML= `${j}`;
}
