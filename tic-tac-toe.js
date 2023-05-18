// Tic Tac Toe 

// Var to keep track of the current player ('X' or 'O')
var currentPlayer = 'X';

// Array to represent the game board
var board = ['', '', '', '', '', '', '', '', ''];

// player move
function makeMove(cell) {
  // Check if the selected cell is empty
  if (board[cell] === '') {
    // Assign the current player's symbol to the selected cell
    board[cell] = currentPlayer;
    document.getElementById(cell).innerText = currentPlayer;
    
    // Check if the current player has won
    if (checkWin(currentPlayer)) {
      alert(currentPlayer + ' wins!');
      resetBoard(); // Reset the board for a new game
    } 
    // Check if the game is a tie
    else if (board.every(cell => cell !== '')) {
      alert('It\'s a tie!');
      resetBoard(); // Reset the board for a new game
    } 
    else {
      // Switch to the other player's turn
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

// Function to check if a player has won
function checkWin(player) {
  // Check rows
  for (var i = 0; i < 9; i += 3) {
    if (board[i] === player && board[i + 1] === player && board[i + 2] === player) {
      return true;
    }
  }

  // Check columns
  for (var i = 0; i < 3; i++) {
    if (board[i] === player && board[i + 3] === player && board[i + 6] === player) {
      return true;
    }
  }

  // Check diagonals
  if ((board[0] === player && board[4] === player && board[8] === player) ||
      (board[2] === player && board[4] === player && board[6] === player)) {
    return true;
  }

  return false;
}

// Function to reset the game board
function resetBoard() {
  currentPlayer = 'X'; // Reset to the starting player
  board = ['', '', '', '', '', '', '', '', '']; // Clear the board array
  var cells = document.getElementsByClassName('cell');
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerText = ''; // Clear the cell content
  }
}
