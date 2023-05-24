    // *** Game Setup! ***
    var letters = document.getElementById("letters");
    var prompt = document.getElementById("prompt");
    var guessEl = document.getElementById("guess");
    var guessInput = document.getElementById("guessinput");
    var button = document.getElementById("go");
    
    // these are our words
    var words = [
      "javascript",
      "monkey",
      "amazing",
      "pancake",
      "fish",
      "supercalifragilisticexpialidocious"
    ];
    
    var parts = ["head", "torso", "arm-l", "arm-r", "leg-l", "leg-r"];
    
    // picks a word at random
    var word = words[Math.floor(Math.random() * words.length)];
    
    // give me a list of empty letters for the word
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
      answerArray[i] = "_";
    }
    // how many letters are left?
    var remainingLetters = word.length;
    
    // *** Game Loop! ***
    // while there are still letters to guess
    letters.innerHTML = answerArray.join(" ");
    var guess;
    var answer;
    
    if (remainingLetters > 0) {
      var submission = () => {
        guess = guessInput.value;
        var existingLetters = remainingLetters;
    
        if (guess.length !== 1) {
          alert("Please enter a single letter");
        } else {
          //update the game state with the guess
          for (var j = 0; j < word.length; j++) {
            // if they were correct
            if (word[j] === guess) {
              answerArray[j] = guess;
              letters.innerHTML = answerArray.join(" ");
              remainingLetters--;
            }
          }
    
          // otherwise they got it wrong!
          if (existingLetters === remainingLetters) {
            if (parts.length > 0) {
              var part = document.getElementById(parts[0]);
              part.style.display = "block";
              parts.shift();
            }
            else {
              alert("GAME OVER you lost hehehehe");
            }
          }
    
          // after you're done with everything, remove the letter from the input
          guessInput.value = "";
        }
      };
      
      button.addEventListener('click', submission, false)
      guessInput.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
          submission()
        }
      }, true)
    }
    
    if (remainingLetters === 0) {
      letters.innerHTML = answerArray.join(" ");
      alert("Good job! The answer was " + word);
    }