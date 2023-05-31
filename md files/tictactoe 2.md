<html lang="en">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic Tac Toe</title>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap" rel="stylesheet">
    <!-- Stylesheet -->
    <link rel="stylesheet" href="tictactoe.css">
</head>
<body>
   <div class="wrapper">
       <div class="container">
           <button class="button-option"></button>
           <button class="button-option"></button>
           <button class="button-option"></button>
           <button class="button-option"></button>
           <button class="button-option"></button>
           <button class="button-option"></button>
           <button class="button-option"></button>
           <button class="button-option"></button>
           <button class="button-option"></button>
       </div>
       <button id="restart">Restart</button>
   </div>

   <div class="popup hide">
       <p id="message">Sample</p>
       <button id="new-game">New Game</button>
   </div>
   
</body>
</html>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    height: 100vh;
    background: linear-gradient(135deg, #9f79f9, #66b2d8);
  }
  html {
    font-size: 16px;
  }
  .wrapper {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }
  .container {
    width: 70vmin;
    height: 70vmin;
    display: flex;
    flex-wrap: wrap;
    gap: 2vmin;
  }
  .button-option {
    background: #ffffff;
    height: 22vmin;
    width: 22vmin;
    border: none;
    border-radius: 8px;
    font-size: 12vmin;
    color: #8137e1;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }
  #restart {
    font-size: 1.3em;
    padding: 1em;
    border-radius: 8px;
    background-color: #0a0027;
    color: #ffffff;
    border: none;
    position: relative;
    margin: 1.5em auto 0 auto;
    display: block;
  }
  .popup {
    background: linear-gradient(135deg, #9f79f9, #66b2d8);
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    z-index: 2;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1em;
    font-size: 12vmin;
  }
  #new-game {
    font-size: 0.6em;
    padding: 0.5em 1em;
    background-color: #0a0027;
    color: #ffffff;
    border-radius: 0.2em;
    border: none;
  }
  #message {
    color: #ffffff;
    text-align: center;
    font-size: 1em;
  }
  .popup.hide {
    display: none;
  }

  </style>

  <script>

  // Get references to buttons, popup, new game button, restart button and message element
let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");
let xWins = 0;
let oWins = 0;
let draws = 0;

// Define possible winning patterns in a 3x3 grid
let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];

// By default, Player 'X' plays first
let xTurn = true;
let count = 0; // Keeps track of turns taken

// disable all buttons
const disableButtons = () => {
  btnRef.forEach((element) => (element.disabled = true));
  // Show popup
  popupRef.classList.remove("hide");
};

// enable all buttons (Used for New Game and Restart)
const enableButtons = () => {
  btnRef.forEach((element) => {
    element.innerText = "";  // Clear the button text
    element.disabled = false;  // Enable the button
  });
  // Hide popup
  popupRef.classList.add("hide");
};

// when a player wins
const winFunction = (letter) => {
  // Disable all buttons when a player wins
  disableButtons();
  // Display win message based on which player wins
  msgRef.innerHTML = letter == "X" ? "&#x1F389; <br> 'X' Wins" : "&#x1F389; <br> 'O' Wins";
  // Increment the appropriate win counter
  if (letter === "X") {
    xWins++;
    document.getElementById('xWins').innerText = `X Wins: ${xWins}`;
  } else {
    oWins++;
    document.getElementById('oWins').innerText = `O Wins: ${oWins}`;
  }
};

// Function for handling draw scenario
const drawFunction = () => {
  disableButtons();  // Disable all buttons on draw
  msgRef.innerHTML = "&#x1F60E; <br> It's a Draw";  // Display draw message
  draws++;  // Increment draw counter
  document.getElementById('draws').innerText = `Draws: ${draws}`;
};

// Start a new game or restart existing game
newgameBtn.addEventListener("click", () => {
  count = 0;  // Reset turn count
  enableButtons();  // Enable all buttons
});

restartBtn.addEventListener("click", () => {
  count = 0;  // Reset turn count
  enableButtons();  // Enable all buttons
});

// Function to check for win
const winChecker = () => {
  // Loop through all possible winning patterns
  for (let i of winningPattern) {
    // Extract the contents of the potential winning buttons
    let [element1, element2, element3] = [
      btnRef[i[0]].innerText,
      btnRef[i[1]].innerText,
      btnRef[i[2]].innerText,
    ];
    // Check if all elements in pattern are not empty and are the same
    if (element1 != "" && element2 != "" && element3 != "" && element1 == element2 && element2 == element3) {
      winFunction(element1);  // Call the win function with the winning letter
    }
  }
};

// Event listener for button clicks
btnRef.forEach((element) => {
  element.addEventListener("click", () => {
    if (xTurn) {
      xTurn = false;  // Switch turn
      element.innerText = "X";  // Display 'X'
    } else {
      xTurn = true;  // Switch turn
      element.innerText = "O";  // Display 'O'
    }
    element.disabled = true;  // Disable the button after it's clicked
    count += 1;  // Increment turn count
    if (count == 9) {  // Check if all squares are filled (game is a draw)
      drawFunction();
    }
    winChecker();  // Check for win after each click
  });
});

// Enable buttons and hide popup when the page loads
window.onload = enableButtons;

<script>
