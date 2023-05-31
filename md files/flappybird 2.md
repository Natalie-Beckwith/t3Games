<body style="height: 100vh; background: #111; text-align: center;touch-action: manipulation;">
    <canvas id="c" width="400" height="400"></canvas>
    <script>
      context = c.getContext("2d");
      const bird = new Image();
      bird.src = "/images/bird.png";
      birdX = birdDY = score = bestScore = 0;
      interval = birdSize = pipeWidth = topPipeBottomY = 24;
      birdY = pipeGap = 200;
      canvasSize = pipeX = 400;
      c.onclick = () => (birdDY = 9) ;
      setInterval(() => {
        context.fillStyle = "#87aadb";
        context.fillRect(0,0,canvasSize,canvasSize); // Draw sky
        birdY -= birdDY -= 0.5; // Gravity
        context.drawImage(bird, birdX, birdY, birdSize * (524/374), birdSize); // Draw bird
        context.fillStyle = "#4b9467";
        pipeX -= 8; // Move pipe
        pipeX < -pipeWidth && // Pipe off screen?
          ((pipeX = canvasSize), (topPipeBottomY = pipeGap * Math.random())); // Reset pipe and randomize gap.
        context.fillRect(pipeX, 0, pipeWidth, topPipeBottomY); // Draw top pipe
        context.fillRect(pipeX, topPipeBottomY + pipeGap, pipeWidth, canvasSize); // Draw bottom pipe
        context.fillStyle = "black";
        context.fillText(score++, 9, 25); // Increase and draw score
        bestScore = bestScore < score ? score : bestScore; // New best score?
        context.fillText(`Best: ${bestScore}`, 9, 50); // Draw best score
        (((birdY < topPipeBottomY || birdY > topPipeBottomY + pipeGap) && pipeX < birdSize * (524/374))// Bird hit pipe?
         || birdY > canvasSize) && // Bird falls off screen
        ((birdDY = 0), (birdY = 200), (pipeX = canvasSize), (score = 0)); // Bird died
      }, interval)
    </script>
  </body>
<style>
*{
    padding: 0;
    margin: 0;
}
#game
{
    width: 400px;
    height: 500px;
    border: 1px solid black;
    margin: auto;
    overflow: hidden;
}
#block
{
    width: 50px;
    height: 500px;
    background-color: #7f3136;
    position: relative;
    left: 400px;
    animation: block 2s infinite linear;
}
@keyframes block
{
    0%{left:400px}
    100%{left:-50px}
}
#hole
{
    width: 50px;
    height: 150px;
    background-color: white;
    position: relative;
    left: 400px;
    top: -500px;
    animation: block 2s infinite linear;
}
#character
{
    width: 20px;
    height: 20px;
    background-color: #7f3136;
    position: absolute;
    top: 100px;
    border-radius: 50%;
}
</style>

<script>
var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;

hole.addEventListener('animationiteration', () => {
     var random = -((Math.random()*300)+150);
     hole.style.top = random + "px";
     counter++;
});
setInterval(function(){
     var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
     if(jumping==0){
         character.style.top = (characterTop+3)+"px";
     }
     var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
     var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
     var cTop = -(500-characterTop);
     if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
         alert("Game over. Score: "+(counter-1));
         character.style.top = 100 + "px";
         counter=0;
     }
},10);

 function jump(){
     jumping = 1;
     let jumpCount = 0;
     var jumpInterval = setInterval(function(){
         var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
         if((characterTop>6)&&(jumpCount<15)){
            character.style.top = (characterTop-5)+"px";
         }
         if(jumpCount>20){
             clearInterval(jumpInterval);
             jumping=0;
             jumpCount=0;
         }
        jumpCount++;
     },10);
}
    </script>
