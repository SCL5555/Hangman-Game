
//List of words available to play
var words = ["dog", "chow", "pit", "shitzu", "hound", "bichon"];

//Current word to play

var wordPlaying;
var lettersGuessed = [];
var solvingDisplayArray = [];
var wordToString;
var numGuesses;


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

	alert("Press any key to begin!");
}

function win()
{
	if (JSON.stringify(wordArray) === JSON.stringify(solvingDisplayArray))
	{
		alert("you won!");
		startGame();
	}
}

	document.onkeyup = function(event){
    	var letterGuessed = event.key.toLowerCase();

		for(var i = 0; i < wordArray.length; i++)
		{
			
			//if letter guessed matches any letter in the array then place that letter in that spot of a new array
			if (letterGuessed === wordArray[i])
			{
				solvingDisplayArray.splice(i , 1, letterGuessed);
				document.getElementById("wordtoSolve").innerHTML = solvingDisplayArray.join(" ");
	
				console.log("solving array " + solvingDisplayArray);
			}
		}
		
		

		lettersGuessed.push(letterGuessed);
		console.log("letters guessed: " + lettersGuessed);
		document.getElementById("guessedLetters").innerHTML = lettersGuessed.join(" ");
    	numGuesses--;
    	document.getElementById("guessesLeft").innerHTML = numGuesses;

    	if (numGuesses <= 0 )
    	{
    		alert("Game over, out of guesses!");
    		// var wordPlaying = words[Math.floor(Math.random() * words.length)];
    		startGame();
    	}
    	win();
     }












