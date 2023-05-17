<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
.accordion
{
  background-color: #101f26;
  color: #e4eefa;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
  border-radius: 2px;
}
.active, .accordion:hover
{
  background-color: #1d2c4f;
  color: #4877b7;
}
.accordion:after
{
  content: '\002B';
  color: #e4eefa;
  font-weight: bold;
  float: right;
  margin-left: 5px;
}
.active:after
{
  content: "\2212";
}
.panel
{
  padding: 0 18px;
  background-color: #101f26;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}
</style>
</head>
<body id ="instructions-body">

<h2>How to Play</h2>
<br>

<button class="accordion">Tic-Tac-Toe</button>
<div class="panel">
  <p>When you click play, a menu will appear with 4 different options for playing.</p>
  <h4>Human VS Computer</h4>
  <p>This option allows you to play against a computer.</p>
  <br>

  <h4>Human VS Human</h4>
  <p>This option allows you to play against another person.</p>
  <br>

  <h4>Computer VS Computer</h4>
  <p>In this option, two computers play each other.</p>
  <br>

  <h4>Quit</h4>
  <p>This option quits the game.</p>

  <hr>

  <p>Players take turns putting their marks in empty squares. The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner. When all 9 squares are full the game is over. If no player has 3 marks in a row, the game ends in a tie.</p>
</div>
<br>

<button class="accordion">Connect 4</button>
<div class="panel">
  <p>Build a row of 4 checkers while keeping your opponent from doing the same. Sounds easy, but it's not! The vertical strategy creates a unique challenge: you must thing in a whole new way to block your opponent's moves!</p>
</div>
<br>

<button class="accordion">Flappy Bird</button>
<div class="panel">
  <p>Stay in the middle of the screen until the first set of pipes appears. Measure your tap heights to go between the two pipes.</p>
</div>
<br>

<button class="accordion">Poker</button>
<div class="panel">
  <p>Below are how different hands are scored.</p>
  <!--<img src="https://content.artofmanliness.com/uploads//2015/05/poker-how-to-ranking.jpg" alt="img" style="width:35%;">
  <br>--><br>

  <h4>Royal Flush</h4>
  <h5>250 Tokens</h5>
  <p>This hand contains 5 cards in sequence all of the same suit.</p>
  <p>
    [A ♥] 
    [K ♥] 
    [Q ♥] 
    [J ♥] 
    [10 ♥]
  </p><br>
  
  <h4>Straight Flush</h4>
  <h5>50 Tokens</h5>
  <p>This hand contains 5 cards in sequence, all of the same rank.</p>
  <p>
    [8 ♧] 
    [7 ♧] 
    [6 ♧] 
    [5 ♧] 
    [4 ♧] 
  </p>
  <br>
  
  <h4>4 of a Kind</h4>
  <h5>25 Tokens</h5>
  <p>This hand contains all 4 cards of one rank and any other unmatched card.</p>
  <p>
    [5 ♦] 
    [5 ♤] 
    [5 ♥] 
    [5 ♧] 
    [3 ♥] 
  </p>
  <br>
  
  <h4>Full House</h4>
  <h5>6 Tokens</h5>
  <p>This hand contains 3 matching cards of 1 rank and 2 matching cards of another rank.</p>
  <p>
    [K ♥] 
    [K ♦] 
    [K ♤] 
    [5 ♥] 
    [5 ♧] 
  </p>
  <br>
  
  <h4>Flush</h4>
  <h5>5 Tokens</h5>
  <p>This hand contains all 5 cards of the same suit, but not in sequence.</p>
  <p>
    [K ♤] 
    [J ♤] 
    [9 ♤] 
    [7 ♤] 
    [3 ♤] 
  </p>
  <br>

  <h4>Straight</h4>
  <h5>4 Tokens</h5>
  <p>This hand contains 5 cards of sequential rank in at least 2 different suits.</p>
  <p>
    [8 ♧] 
    [7 ♧] 
    [6 ♧] 
    [5 ♧] 
    [4 ♧] 
  </p>
  <br>
  
  <h4>3 of a Kind</h4>
  <h5>3 Tokens</h5>
  <p>This hand contains 3 cards of the same rank, with 2 cards not of this suit nor the same as each other.</p>
  <p>
    [Q ♤] 
    [Q ♥] 
    [Q ♦] 
    [5 ♤] 
    [9 ♧] 
  </p>
  <br>
  
  <h4>2 Pair</h4>
  <h5>2 Tokens</h5>
  <p>This hand contains 2 cards of the same rank, plus 2 cards of another rank</p>
  <p>
    [K ♥] 
    [K ♤] 
    [J ♧] 
    [J ♦] 
    [9 ♦] 
  </p>
  <br>

  <h4>1 Pair</h4>
  <h5>1 Token</h5>
  <p>This hand contains 2 cards of the same rank.</p>
  <p>
    [A ♧] 
    [A ♦] 
    [9 ♥] 
    [6 ♤] 
    [4 ♦] 
  </p>
  <br>
</div>

<script>
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
</script>

</body>
</html>
