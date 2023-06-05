<html>
<head>
  <title>Memory Game</title>
  <style>
    /* CSS styles for the game interface */
    h2 {
      text-align: center;
    }
    #game-board {
      display: flex;
      flex-wrap: wrap;
      width: 400px;
      height: 400px;
    }
    .card {
      width: 90px;
      height: 90px;
      background-color: #4b9467;
      border: 1px solid #e4eefa;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    .card.flip {
      background-color: #e4eefa;
    }
  </style>
</head>
<body>
  <h2>Memory Game</h2>
  <div id="game-board"></div>
  
  <script>
    // Array of card symbols
    var symbols = ['♠', '♣', '♥', '♦', '♤', '♧', '♡', '♢'];
    
    // Duplicate symbols to create pairs
    var cards = symbols.concat(symbols);
    
    // Shuffle the cards
    shuffle(cards);
    
    // Create the game board
    var gameBoard = document.getElementById('game-board');
    
    cards.forEach(function(symbol) {
      var card = document.createElement('div');
      card.className = 'card';
      card.textContent = symbol;
      card.style.color = "4b9467";
      
      card.addEventListener('click', function() {
        revealCard(card);
      });
      
      gameBoard.appendChild(card);
    });
    
    // Variables to keep track of the game state
    var firstCard = null;
    var secondCard = null;
    var lockBoard = false;
    
    // Function to reveal a card when clicked
    function revealCard(card) {
      if (lockBoard) return;
      
      card.classList.add('flip');
      
      if (!firstCard) {
        firstCard = card;
        return;
      }
      
      secondCard = card;
      checkMatch();
    }
    
    // Function to check if the two revealed cards match
    function checkMatch() {
      var isMatch = firstCard.textContent === secondCard.textContent;
      
      isMatch ? disableCards() : unflipCards();
    }
    
    // Function to disable matching cards
    function disableCards() {
      firstCard.removeEventListener('click', revealCard);
      secondCard.removeEventListener('click', revealCard);
      
      resetBoard();
    }
    
    // Function to unflip non-matching cards
    function unflipCards() {
      lockBoard = true;
      
      setTimeout(function() {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        
        resetBoard();
      }, 1000);
    }
    
    // Function to reset the game board and variables
    function resetBoard() {
      [firstCard, secondCard] = [null, null];
      lockBoard = false;
    }
    
    // Function to shuffle an array 
    function shuffle(array) {
      var currentIndex = array.length, temp, randomIndex;
      
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        
        temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
      }
      
      return array;
    }
  </script>
</body>
</html>
