function computerPlay() {
    let arr = ['Rock', 'Paper', 'Scissors'];
    let play = Math.floor((Math.random() * arr.length));
    return(arr[play]);
}

function correctSpelling(selection) {
    // take the first letter, make it uppercase
    let firstLetter = selection.slice(0,1);
    firstLetter = firstLetter.toUpperCase();
    // take the rest of the letters, make it lowercase
    let subsLetters = selection.slice(1);
    subsLetters = subsLetters.toLowerCase();

    return(firstLetter + subsLetters);
}

function playSingleRound(playerSelection, computerSelection){
    /*
        If player selection is paper
            if computer selection is rock
                then win
            if computer selection is scissors
                then lose
            if computer selection is paper
                then draw

        If player selection is rock
            if computer selection is rock
                then draw
            if computer selection is scissors
                then win
            if computer selection is paper
                then lose

        If player selection is scissors
            if computer selection is rock
                then lose
            if computer selection is scissors
                then draw
            if computer selection is paper
                then win

        else
            then error, input again
    */

    if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            console.log("You win! Paper beats Rock");
            return(true); //returns true if win
        } else if (computerSelection === "Scissors") {
            console.log("You lose! Paper is beaten by Scissors");
            return(false); //returns false if lose
        } else {
            console.log("It's a draw! You both picked Paper")
            return("draw");
        }
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            console.log("You win! Rock beats Scissors");
            return(true);
        } else if (computerSelection === "Paper") {
            console.log("You lose! Rock is beaten by Paper");
            return(false);
        } else {
            console.log("It's a draw! You both picked Rock");
            return("draw");
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            console.log("You win! Scissors beats Paper")
            return(true);
        } else if (computerSelection === "Rock") {
            console.log("You lose! Scissors is beaten by Rock")
            return(false);
        } else {
            console.log("It's a draw! You both picked Scissors")
            return("draw");
        }
    } else {
        console.log("Invalid choice. Please choose either Rock, Paper, or Scissors.")
        return("invalid");
    }
}

function game() {
    let win = 0;
    let draw = 0;

    let myChoice = prompt("Please enter either Rock, Paper, or Scissors:");
    let result = playSingleRound(correctSpelling(myChoice), computerPlay());
    if(result === true) {
        ++win;
    } else if (result === "draw") {
        ++draw;
    }
    console.log(win);
    console.log(draw);
    
    myChoice = prompt("Please enter either Rock, Paper, or Scissors:");
    result = playSingleRound(correctSpelling(myChoice), computerPlay());
    if(result === true) {
        ++win;
    } else if (result === "draw") {
        ++draw;
    }
    console.log(win);
    console.log(draw);

    myChoice = prompt("Please enter either Rock, Paper, or Scissors:");
    result = playSingleRound(correctSpelling(myChoice), computerPlay())
    if(result === true) {
        ++win;
    } else if (result === "draw") {
        ++draw;
    }
    console.log(win);
    console.log(draw);

    myChoice = prompt("Please enter either Rock, Paper, or Scissors:");
    result = playSingleRound(correctSpelling(myChoice), computerPlay())
    if(result === true) {
        ++win;
    } else if (result === "draw") {
        ++draw;
    }
    console.log(win);
    console.log(draw);

    myChoice = prompt("Please enter either Rock, Paper, or Scissors:");
    result = playSingleRound(correctSpelling(myChoice), computerPlay())
    if(result === true) {
        ++win;
    } else if (result === "draw") {
        ++draw;
    }
    console.log(win);
    console.log(draw);

    /*
        if number of wins is at least 3
        then win

        if number of wins is 2 or below
        then lose

        if the whole 5 games results in a draw
        then draw
    */

    if (draw === 5) {
        console.log("It's a draw! Try playing again to win");
    } else if (win > 2){
        console.log("Congratulations! You won the game best out of 5");
    } else {
        console.log("Tough luck! You lost the game. Try playing again to win")
    }
}