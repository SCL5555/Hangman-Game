
//List of words available to play
var words = ["dog", "chow", "pit", "shitzu", "hound", "bichon"];

//Current word to play

var wordPlaying;
var lettersGuessed = [];
var solvingDisplayArray = [];
var wordToString;
var numGuesses;
var wins = 0;


function startGame()
{
	lettersGuessed = [];
	solvingDisplayArray = [];
	numGuesses = 12;
	wordPlaying = words[Math.floor(Math.random() * words.length)];
	wordArray = wordPlaying.split("");
	
	//show the spaces for the word we are trying to solve  
	for (var i = 0; i < wordPlaying.length; i++)
	{
		solvingDisplayArray[i] = "_";
	}

	wordToString = solvingDisplayArray.join(" ");

	document.getElementById("wordtoSolve").innerHTML = wordToString;
	document.getElementById("guessesLeft").innerHTML = numGuesses;
	document.getElementById("guessedLetters").innerHTML = "No Guesses Yet";

	
}

function win()
{
	if (JSON.stringify(wordArray) === JSON.stringify(solvingDisplayArray))
	{
		alert("you won!");
		wins++;
		document.getElementById("wins").innerHTML = wins;
		startGame();
	}
}

	document.onkeypress = function(event){
    	var letterGuessed = event.key.toLowerCase();

		for(var i = 0; i < wordArray.length; i++)
		{
			//if letter guessed matches any letter in the array then place that letter in that spot of a new array
			if (letterGuessed === wordArray[i])
			{
				solvingDisplayArray.splice(i , 1, letterGuessed);
				document.getElementById("wordtoSolve").innerHTML = solvingDisplayArray.join(" ");
			}
		}
		
		lettersGuessed.push(letterGuessed);
		console.log(lettersGuessed);
		document.getElementById("guessedLetters").innerHTML = lettersGuessed.join(" ");
    	numGuesses--;
    	document.getElementById("guessesLeft").innerHTML = numGuesses;

    	if (numGuesses <= 0 )
    	{
    		alert("Game over, out of guesses!");
    		startGame();
    	}
    	
     }
     document.onkeyup = function(event){
        win();
    }












