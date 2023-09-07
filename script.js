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
    }

    if( comp === "Rock" ) {
        if (input === "Paper") {
            result = "The player wins";
        }

        else {
            if (input === "Scissors") 
            result="The computer wins";
        }
    }

    if( comp === "Paper" ) {
        if (input === "Scissors") {
            result = "The player wins";
        }

        else {
            if (input === "Rock") 
            result="The computer wins";
        }
    }

    if( comp === "Scissors" ) {
        if (input === "Rock") {
            result = "The player wins";
        }

        else {
            if (input === "Paper") 
            result="The computer wins";
        }
    }

    console.log(`${result}`);
}

