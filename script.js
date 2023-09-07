function rock() {
   let input = "Rock";
   game();
}

function paper() {
    let input = "Paper";
    game();
    
 }
 
function scissors() {
    let input = "Scissors";
    game();
 }
 
function game() {
    let comp = getComputerChoice("Rock","Paper","Scissors");

    if( input === comp ) {
        result = "It's a Tie";
    }

    if( comp === "Rock" ) {
        if (input === "Paper") {
            result = "The player wins"
        }

        if (input === "Scissors") {
            result="The computer wins"
        }
    }

    if( comp === "Paper" ) {
        if (input === "Scissors") {
            result = "The player wins"
        }

        if (input === "Rock") {
            result="The computer wins"
        }
    }

    if( comp === "Scissors" ) {
        if (input === "Rock") {
            result = "The player wins"
        }

        if (input === "Paper") {
            result="The computer wins"
        }
    }


}

console.log(result);