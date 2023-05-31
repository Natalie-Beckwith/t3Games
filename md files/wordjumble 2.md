<html>
<head>
  <title>Word Jumble Game</title>
  <style>
    /* CSS styles for the game interface */
    body {
      text-align: center;
      font-family: Arial, sans-serif;
      margin: 40px;
      background-color: #04060b;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    h1 {
      color: #7f3136;
    }

    #scrambledWord {
      font-size: 24px;
      margin-top: 20px;
      color: #ffffff;
    }

    #guessInput {
      margin-top: 20px;
      padding: 8px;
      font-size: 16px;
      color: #ffffff;
      background-color: #3a80c1;
      border: none;
    }

    button {
      margin-top: 10px;
      padding: 8px 16px;
      font-size: 16px;
      background-color: #4877b7;
      color: #e4eefa;
      border: none;
      cursor: pointer;
    }

    #message {
      margin-top: 20px;
      font-size: 18px;
      color: #4b9467;
    }
  </style>
</head>
<body>
  <h1>Word Jumble Game</h1>
  <p id="scrambledWord"></p>
  <input type="text" id="guessInput" placeholder="Enter your guess">
  <button onclick="checkGuess()">Check</button>
  <p id="message"></p>
  <button onclick="nextWord()">Next Word</button>
  <button onclick="showHint()">Hint</button>

  <script>
    // List of words for the game
    var words = ["apple", "banana", "cherry", "grape", "orange", "contract", "guilt", "resident", "thread", "suit", "despair", "insistence", "private", "constituency", "define", "fork", "process", "uncertainty", "wheat", "publication", "scandal", "item", "fence", "option", "appointment", "intermediate", "driver", "painter", "buttocks", "straw", "swarm", "examination", "courtship", "timber", "habit", "screen", "attic", "child", "retired", "endorse", "sandwich", "cooperative", "dialogue", "mind", "head", "bang", "forget", "muscle", "stress", "mass", "concentrate", "abolish", "contempt","delicate","access" ];

    // Variables to hold the current word, scrambled word, and hint
    var scrambledWord = "";
    var randomWord = "";
    var hint = "";

    // Function to select a random word from the list
    function selectRandomWord() {
      randomWord = words[Math.floor(Math.random() * words.length)];
    }

    // Function to scramble a word by shuffling its letters
    function scrambleWord(word) {
      return word.split('').sort(function() { return 0.5 - Math.random() }).join('');
    }

    // Function to display the scrambled word on the page
    function displayScrambledWord() {
      scrambledWord = scrambleWord(randomWord);
      document.getElementById("scrambledWord").textContent = scrambledWord;
    }

    // Function to check the user's guess against the random word
    function checkGuess() {
      var guess = document.getElementById("guessInput").value.toLowerCase();
      if (guess === randomWord) {
        document.getElementById("message").textContent = "Congratulations! You guessed the word correctly!";
      } else {
        document.getElementById("message").textContent = "Oops! Try again.";
      }
    }

    // Function to reset the game and select a new random word
    function nextWord() {
      document.getElementById("guessInput").value = "";
      document.getElementById("message").textContent = "";
      selectRandomWord();
      displayScrambledWord();
    }

    // Function to show a hint for the current word
    function showHint() {
      hint = randomWord.substring(0, 2);
      document.getElementById("message").textContent = "Hint: The word starts with '" + hint + "'.";
    }

    // Initial setup: select a random word and display it scrambled
    selectRandomWord();
    displayScrambledWord();
  </script>
</body>
</html>