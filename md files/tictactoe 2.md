<html>
<head>
  <head>
  <meta name="viewport" content=
          "width=device-width, initial-scale=1.0">
  <!-- CSS file Included -->
  <link rel="stylesheet"
        type="text/css" href="tic.css">
  <!-- JavaScript file included -->
  <script src="tic.js"></script>
</head>
</head>
<style>
  /* CSS Code */
  /* Reset Button */
  #but {
      box-sizing: border-box;
      padding: 10px;
      border: none;
      margin: auto;
      border-radius: 25px;
      background-color: #4b9467;
      color: #e4eefa;
      font-size: 20px;
      cursor: pointer;
      text-align: center;
  }
  #h1
  {
        text-align: center;  
  }
  #h2
  {
        text-align: center;
  }
  /* Player turn space */
  #print
  {
      color: #7f3136;
      font-size: 18px;
      margin: 5px;
  }
  /* Main Container */
  #main {
      text-align: center;
  }
</style>
<body>
  <h1>Tic Tac Toe</h1>
  <h2>Choose a game mode:</h2>
  <button id="but" onclick="startHumanVsHuman()">Human vs Human</button>
  <button id="but" onclick="startComputerVsHuman()">Computer vs Human</button>

  <script>
    function startHumanVsHuman() {
      // Redirect to the Human vs Human Tic Tac Toe page
      window.location.href = "ttthvh.html";
    }

    function startComputerVsHuman() {
      // Redirect to the Computer vs Human Tic Tac Toe page
      window.location.href = "tttcvh.html";
    }
  </script>
</body>
</html>
