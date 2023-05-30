<html>
<head>
  <title>Play Poker</title>
  <style>
    body
    {
      text-align: center;
      color: #e4eefa;
    }
    h3
    {
      text-align: left;
    }
    button
    {
      border-radius:25px;
      padding: 7px;
      margin: 5px;
      border:none;
      background-color: #e4eefa;
      color:#04060b
      transition: width .2s, height, .2s;
    }
    button:hover
    {
      color: #4877b7;
      background-color: #cbe3fb;
    }
    th, td
    {
      padding: 5px;
      padding-right: 10px;
    }
    hr
    {
      border-width: 3px;
      border-color: #4877b7;
    }
    #hand, #checkbox, #label
    {
      padding: 5px;
    }
    #discard:disabled
    {
      color: #bdd0e4;
      background-color: #e4eefa;
    }
  </style>
</head>
<body>
  <h2>Poker</h2>
  <br>
  <hr>
  <br>
  <div id="game">
    <button onclick="dealHand()" id="deal">Deal Hand</button>
    <div id="hand"></div>
    <button disabled onclick="discard()" id="discard"> Discard</button>
    <div id="score"> </div>
    <h3>Payout Table</h3>
    <table id="payout-table">
      <tr>
        <th>Hand</th>
        <th>Payout</th>
      </tr>
      <tr>
        <td>Royal Flush</td>
        <td>250</td>
      </tr>
      <tr>
        <td>Straight Flush</td>
        <td>50</td>
      </tr>
      <tr>
        <td>Four of a Kind</td>
        <td>25</td>
      </tr>
      <tr>
        <td>Full House</td>
        <td>9</td>
      </tr>
      <tr>
        <td>Flush</td>
        <td>6</td>
      </tr>
      <tr>
        <td>Straight</td>
        <td>4</td>
      </tr>
      <tr>
        <td>Three of a Kind</td>
        <td>3</td>
      </tr>
      <tr>
        <td>Two Pair</td>
        <td>2</td>
      </tr>
      <tr>
        <td>One Pair</td>
        <td>1</td>
      </tr>
      <tr>
        <td>High Card</td>
        <td>0</td>
      </tr>
    </table>
  </div>

  <script>
    // One-Person Poker Game

    // Create a deck of cards
    const suits = ["♠", "♣", "♥", "♦"];
    const cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    let _deck = [];
    let _hand = [];

    // create checkboxex
    let id  = 0
    
    var body = document.body;
    
     for (let id = 0; id < 5; id++)
     {
        idStr = "checked" + id.toString();
        labelStr = "label" + id.toString();

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = idStr;
        body.appendChild(checkbox);

        const label = document.createElement("label");
        label.id = labelStr;

        body.appendChild(label);
    }

    // Shuffle the deck
    function shuffleDeck() {
      _deck = [];
      for (let suit of suits) {
        for (let card of cards) {
          _deck.push(`${card}${suit}`);
        }
      }
      for (let i = _deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [_deck[i], _deck[j]] = [_deck[j], _deck[i]];
      }
    }

    // Deal a hand
    function dealHand() {
        
      document.getElementById("discard").disabled = false;
      
      shuffleDeck();
      _hand = dealCards(5);
      displayHand(_hand);

      const score = getScore(_hand);
      displayScore(score);
    }

    // Deal specified number of cards
    function dealCards(numCards) {
      const hand = [];
      for (let i = 0; i < numCards; i++) {
        hand.push(_deck.pop());
      }
      return hand;
    }
    
    // Display the hand
    function displayHand (hand) {
        
      const handDiv = document.getElementById("hand");

      id = 0;
      
      for (let card of hand) {
        checkedStr = "checked" + id.toString();
        labelStr = "label" + id.toString();
                  
        const checkbox = document.getElementById(checkedStr);
        checkbox.checked = false;
        
        const label = document.getElementById(labelStr);
        
        label.htmlFor = card;
        label.innerHTML = " " + card + "\n";
        
        id++;
        
      }      
    }
    
    // Discard and redraw selected cards
    function discard() {
    
        document.getElementById("deal").disabled = false;
        document.getElementById("discard").disabled = true;
        
    
      // disable discard button
      const discardButton = document.getElementById("score");
      discardButton.disabled = true;
        
        
        hand
      const handDiv = document.getElementById("hand");
      handDiv.disaabled = true;
        
      let id = 0;
      
      let selectedCards = []
        for (let card of _hand) {
          idStr = "checked" + id.toString();
            
          const checkbox = document.getElementById(idStr);
          if (checkbox.checked)
          {
              selectedCards.push(_hand[id]);
          }
          id++;
      }

      console.log("selected cards = ", selectedCards);

      if (selectedCards.length === 0) {
        alert("Please select at least one card to discard.");
        document.getElementById("discard").disabled = false;
        
        return;
      }

      handDiv.innerHTML = "Discarding...";

      setTimeout(function () {
        for (let card of selectedCards) {
            
          const index = _hand.indexOf(card);
          _hand.splice(index, 1);
        }        

        const newCards = dealCards(selectedCards.length);
        _hand.push(...newCards);

        displayHand(_hand);
        const score = getScore(_hand);
        displayScore(score);
      }, 1000);
    }


    // Determine the score of the hand
    function getScore(hand) {
      const values = hand.map(card => getCardValue(card.slice(0, -1)));
      const suits = hand.map(card => card.slice(-1));

      // Check for royal flush
      if (values.includes(10) && values.includes(11) && values.includes(12) && values.includes(13) && values.includes(14) && new Set(suits).size === 1) {
        return { score: "Royal Flush!", payout: 250 };
      }

      // Check for straight flush
      if (isStraight(values) && new Set(suits).size === 1) {
        return { score: "Straight Flush!", payout: 50 };
      }

      // Check for four of a kind
      if (isFourOfAKind(values)) {
        return { score: "Four of a Kind!", payout: 25 };
      }

      // Check for full house
      if (isFullHouse(values)) {
        return { score: "Full House!", payout: 9 };
      }

      // Check for flush
      if (new Set(suits).size === 1) {
        return { score: "Flush!", payout: 6 };
      }

      // Check for straight
      if (isStraight(values)) {
        return { score: "Straight!", payout: 4 };
      }

      // Check for three of a kind
      if (isThreeOfAKind(values)) {
        return { score: "Three of a Kind!", payout: 3 };
      }

      // Check for two pairs
      if (isTwoPair(values)) {
        return { score: "Two Pair!", payout: 2 };
      }

      // Check for one pair
      if (isOnePair(values)) {
        return { score: "One Pair!", payout: 1 };
      }

      // get max vlaue of the cards
      maxValue = Math.max(...values);
      // convert back to a face card if needed
      cardName  = getCardName(maxValue)
      
      // No special combination, return the highest card
      return { score: "High Card: " + cardName, payout: 0 };
    }

    // Get the numerical value of a card
    function getCardValue(rank) {
      const faceCards = { A: 14, K: 13, Q: 12, J: 11 };
      return faceCards[rank] || parseInt(rank);
    }

    // Get the card value or face card name
    function getCardName(rank) {
      const faceCards = { 14: "A", 13 : "K", 12 : "Q", 11 : "J"};
      return faceCards[rank] || parseInt(rank);
    }
    

    // Check if the values form a straight
    function isStraight(values) {
      const sortedValues = values.map(card => parseInt(card)).sort((a, b) => a - b);
      for (let i = 0; i < sortedValues.length - 1; i++) {
        if (sortedValues[i] + 1 !== sortedValues[i + 1]) {
          return false;
        }
      }
      return true;
    }

    // Check if the values contain four of a kind
    function isFourOfAKind(values) {
      const countMap = {};
      for (let value of values) {
        countMap[value] = countMap[value] ? countMap[value] + 1 : 1;
      }
      return Object.values(countMap).includes(4);
    }

    // Check if the values contain a full house
    function isFullHouse(values) {
      const countMap = {};
      for (let value of values) {
        countMap[value] = countMap[value] ? countMap[value] + 1 : 1;
      }
      return Object.values(countMap).includes(3) && Object.values(countMap).includes(2);
    }

    // Check if the values contain three of a kind
    function isThreeOfAKind(values) {
      const countMap = {};
      for (let value of values) {
        countMap[value] = countMap[value] ? countMap[value] + 1 : 1;
      }
      return Object.values(countMap).includes(3);
    }

    // Check if the values contain two pairs
    function isTwoPair(values) {
      const countMap = {};
      for (let value of values) {
        countMap[value] = countMap[value] ? countMap[value] + 1 : 1;
      }
      return Object.values(countMap).filter(count => count === 2).length === 2;
    }

    // Check if the values contain one pair
    function isOnePair(values) {
      const countMap = {};
      for (let value of values) {
        countMap[value] = countMap[value] ? countMap[value] + 1 : 1;
      }
      return Object.values(countMap).includes(2);
    }

    // Display the score
    function displayScore2(score) {
      const scoreDiv = document.getElementById("score");
      scoreDiv.innerHTML = "Score: " + score;
    }
    
    // Display the score and payout
    function displayScore(score) {
      const scoreDiv = document.getElementById("score");
      scoreDiv.innerHTML = `Score: ${score.score} (Payout: ${score.payout} coins)`;
    }


  </script>
</body>
</html>
