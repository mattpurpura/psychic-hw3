
        // defining variables
        var wins = 0;
        var losses = 0;
        var guessesLeft = 9; 
        var pastGuesses = [];
        var alphabet = ["a", "b", "c", "d", "e", 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var magicLetter = alphabet[Math.floor(Math.random() * 26)];
        var winner;      

        document.onkeyup = function(event) {
            var userGuess = event.key.toLowerCase();
            console.log(userGuess);
            //if the player's guess is correct
            if (userGuess === magicLetter) {
                wins++;
                magicLetter = alphabet[Math.floor(Math.random() * 26)];
                guessesLeft = 9;
                pastGuesses = [];
                winner = userGuess;
            }
            //if the player's guess is incorrect
            else {
                guessesLeft--;
                pastGuesses.push(userGuess);
                
            }
            //if the player runs out of guesses/loses
            if (guessesLeft < 1){
                losses++;
                magicLetter = alphabet[Math.floor(Math.random() * 26)];
                guessesLeft = 9;
                pastGuesses = [];
            } 
            //editing html display           
            document.getElementById("winCount").textContent = wins;
            document.getElementById("lossCount").textContent = losses;
            document.getElementById("guessCount").textContent = guessesLeft;
            document.getElementById("userGuesses").textContent = pastGuesses;
            document.getElementById("winningLetter").textContent = winner;
        }