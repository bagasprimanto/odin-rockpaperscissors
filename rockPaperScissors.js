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
            return("You win! Paper beats Rock");
        } else if (computerSelection === "Scissors") {
            return("You lose! Paper is beaten by Scissors");
        } else {
            return("It's a draw! You both picked Paper");
        }
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            return("You win! Rock beats Scissors");
        } else if (computerSelection === "Paper") {
            return("You lose! Rock is beaten by Paper");
        } else {
            return("It's a draw! You both picked Rock");
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            return("You win! Scissors beats Paper");
        } else if (computerSelection === "Rock") {
            return("You lose! Scissors is beaten by Rock");
        } else {
            return("It's a draw! You both picked Scissors");
        }
    } else {
        return("Invalid choice. Please choose either Rock, Paper, or Scissors.");
    }
}