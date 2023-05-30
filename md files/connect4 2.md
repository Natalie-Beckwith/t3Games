<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
.navbar {
  overflow: hidden;
  background-color: #101f26;
  border-radius: 25px;
}
.navbar a {
  float: left;
  font-size: 16px;
  color: #e4eefa;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  transition: width .2s, height, .2s;
}
.dropdown {
  float: left;
  overflow: hidden;
  transition: width .2s, height, .2s;
}
.dropdown .dropbtn {
  font-size: 16px;  
  border: none;
  outline: none;
  color: #e4eefa;
  padding: 14px 16px;
  background-color: inherit;
  margin: 0;
  transition: width .2s, height, .2s;
}
.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: #7f3136;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #e4eefa;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 2px;
}
.dropdown-content a {
  float: none;
  color: #101f26;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  transition: width .2s, height, .2s;
}
.dropdown-content a:hover {
  background-color: #cbe3fb;
  color: #4877b7;
}
.dropdown:hover .dropdown-content {
  display: block;
}
#myBtn
{
  width: 60px;
  display: none;
  position: fixed;
  bottom: 20px;
  right: 40px;
  z-index: 99;
  font-size: 24px;
  border: none;
  outline: none;
  background-color: #152329c0;
  color: #cbe3fba8;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 50%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.278);
  transition: width .5s, height, .5s;
}
#myBtn:hover
{
  background-color: #1c292f;
  color: #cbe3fb;
}
</style>
</head>
<body>

<div class="navbar">
  <a href="/">Home</a>
  <a href="/instructions.html">Instructions</a>
  <div class="dropdown">
    <button class="dropbtn">Play 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="/tictactoe/tictactoe.html">Tic-Tac-Toe</a>
      <a href="/connect4/connect4.html">Connect 4</a>
      <a href="/flappybird.html">Flappy Bird</a>
      <a href="/snake.html">Snake</a>
      <a href="/numberguess.html">Number Guess</a>
      <a href="#">Poker</a>
    </div>
  </div> 

  <div class="dropdown">
    <button class="dropbtn">Profile 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Profile</a>
      <a href="#">Leaderboard</a>
      <a href="/signup.html">Signup</a>
    </div>
  </div> 
</div>

<button onclick="topFunction()" id="myBtn" title="Go to top">⇧</button>

<script>
  // Get the button
  let mybutton = document.getElementById("myBtn");
  
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  </script>

</body>
</html>

        <br>

        <!-- this is Jekyll magic, each md file in site will be inserted here -->

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>Connect 4</title>
    <link rel="stylesheet" href="connect4.css">
    <script src="connect4.js"></script>
</head>
<body>
    <h1 style="color:white;">Connect 4</h1>
    <h2 id="winner"></h2>
    <div id="board"></div>
</body>
</html>

body {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
}

#board {
    height: 540px;
    width: 630px;
    background-color: blue;
    border: 10px solid navy;
    
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
}

.tile {
    height: 70px;
    width: 70px;
    margin: 5px;

    /* Circle */
    background-color: white;
    border-radius: 50%;
    border: 5px solid navy;
}

.red-piece {
    background-color: red;
}

.yellow-piece {
    background-color: yellow;
}

var playerRed = "R";
var playerYellow = "Y";
var currPlayer = playerRed;

var gameOver = false;
var board;

var rows = 6;
var columns = 7;
var currColumns = []; //keeps track of which row each column is at.

window.onload = function() {
    setGame();
}

function setGame() {
    board = [];
    currColumns = [5, 5, 5, 5, 5, 5, 5];

    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            // JS
            row.push(' ');
            // HTML
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.addEventListener("click", setPiece);
            document.getElementById("board").append(tile);
        }
        board.push(row);
    }
}

function setPiece() {
    if (gameOver) {
        return;
    }

    //get coords of that tile clicked
    let coords = this.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    // figure out which row the current column should be on
    r = currColumns[c]; 

    if (r < 0) { // board[r][c] != ' '
        return;
    }

    board[r][c] = currPlayer; //update JS board
    let tile = document.getElementById(r.toString() + "-" + c.toString());
    if (currPlayer == playerRed) {
        tile.classList.add("red-piece");
        currPlayer = playerYellow;
    }
    else {
        tile.classList.add("yellow-piece");
        currPlayer = playerRed;
    }

    r -= 1; //update the row height for that column
    currColumns[c] = r; //update the array

    checkWinner();
}

function checkWinner() {
     // horizontal
     for (let r = 0; r < rows; r++) {
         for (let c = 0; c < columns - 3; c++){
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r][c+1] && board[r][c+1] == board[r][c+2] && board[r][c+2] == board[r][c+3]) {
                    setWinner(r, c);
                    return;
                }
            }
         }
    }

    // vertical
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows - 3; r++) {
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r+1][c] && board[r+1][c] == board[r+2][c] && board[r+2][c] == board[r+3][c]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }

    // anti diagonal
    for (let r = 0; r < rows - 3; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r+1][c+1] && board[r+1][c+1] == board[r+2][c+2] && board[r+2][c+2] == board[r+3][c+3]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }

    // diagonal
    for (let r = 3; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r-1][c+1] && board[r-1][c+1] == board[r-2][c+2] && board[r-2][c+2] == board[r-3][c+3]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }
}

function setWinner(r, c) {
    let winner = document.getElementById("winner");
    if (board[r][c] == playerRed) {
        winner.innerText = "Red Wins";             
    } else {
        winner.innerText = "Yellow Wins";
    }
    gameOver = true;
}
