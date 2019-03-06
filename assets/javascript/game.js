// Create an array that has the letters the computer can choose from 
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//mMke variables needed throughout the game 

var wins = 0;
var losses = 0;
var tries = 9;
//Make the letters guessed an empty string to add to later
var letters_guessed = ""
var computerGuess = ""
var userGuess = ""

//Have a placeholder for each id that is displayed 
//This will allow us to give the HTML text later on

var winsText = document.getElementById("winCounter");
var lossesText = document.getElementById("lossCounter");
var triesText = document.getElementById("guessesleft");
var letters_guessedText = document.getElementById("lettersGuessed");

//a reset function that will start the game and reset the counters if need be

function reset() {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    tries = 9;
    letters_guessed = ""
}


//call the reset to start the game and reset tries
reset()

//This game will begin when a guess is entered
document.onkeyup = function (event) {
    userGuess = event.key;
   
    //This will evaluate the guesses 

    //If they are the same then it will count as a win and start over
    if (userGuess === computerGuess) {
        wins++;
        reset();
    }
    //If they are not and there are still tries then it will take
    //one away from the tries and add to the guessed letters string
    else if (userGuess !== computerGuess && tries > 0) {
        tries--;
        letters_guessed += userGuess + ", ";
    }
    //If there are no more tries, it will count as a loss and start over
    else if (tries === 0) {
        losses++;
        reset()
    }


    //This section feeds the information to our span and 
    //allows it to appear on the screen 
    winsText.textContent = wins;
    lossesText.textContent = losses;
    triesText.textContent = tries;
    letters_guessedText.textContent = letters_guessed;
    
    

};
