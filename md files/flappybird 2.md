<html lang="en" onclick="jump()">
<head>
    <meta charset="UTF-8">
    <title>Flappy Bird</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="game">
        <div id="block"></div>
        <div id="hole"></div>
        <div id="character"></div>
    </div>
</body>
<script src="script.js"></script>

<style>
*{
    padding: 0;
    margin: 0;
}
#game{
    width: 400px;
    height: 500px;
    border: 1px "#4b9467";
    margin: auto;
    overflow: hidden;
}
#block{
    width: 50px;
    height: 500px;
    background-color: white;
    position: relative;
    left: 400px;
    animation: block 2s infinite linear;
}
@keyframes block{
    0%{left:400px}
    100%{left:-50px}
}
#hole{
    width: 50px;
    height: 150px;
    background-color: white;
    position: relative;
    left: 400px;
    top: -500px;
    animation: block 2s infinite linear;
}
#character{
    width: 20px;
    height: 20px;
    background-color: red;
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

</html>