<html>
<head>
  <title>Numbers Guessing Games</title>
  <style>
    body {
      text-align: center;
    }
    input[type="number"] {
      padding: 8px;
      font-size: 16px;
      border-radius: 25px;
      border: none;
    }
    button
    {
      padding: 10px 20px;
      font-size: 16px;
      background-color: #e4eefa;
      color: #101f26;
      border: none;
      border-radius: 25px;
      cursor: pointer;
      transition: width .2s, height, .2s;
    }
    button:hover
    {
      background-color: #cbe3fb;
      color: #4877b7;
    }
    #feedback
    {
      font-weight: bold;
    }
  </style>
  <script>
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    // Track the number of guesses
    let numberOfGuesses = 0;
    // Function to compare the user's guess with the random number
    function checkGuess() {
      // Get the user's guess from the input field
      const userGuess = Number(document.getElementById('guessInput').value);
      // Update the number of guesses
      numberOfGuesses++;
      // Get the feedback element
      const feedback = document.getElementById('feedback');
      // Check if the guess is correct
      if (userGuess === randomNumber) {
        feedback.textContent = `Congratulations! You guessed the number in ${numberOfGuesses} guesses.`;
      } else if (userGuess > randomNumber) {
        feedback.textContent = 'Too high! Try again.';
      } else {
        feedback.textContent = 'Too low! Try again.';
      }
      // Clear the input field
      document.getElementById('guessInput').value = '';
    }
  </script>
</head>
<body>
  <h2>Number Guessing Game</h2>
  <p>Guess a number between 1 and 100:</p>
  <br>
  <input type="number" id="guessInput">
  <br><br><br><br><br><br><br><br><br>
  <button onclick="checkGuess()">Guess</button>
  <p id="feedback"></p>
</body>
</html>
