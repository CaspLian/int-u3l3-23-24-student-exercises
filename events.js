// stored html elements
let mario = document.querySelector(".mario");
let coin = document.querySelector(".coin");
let score = document.querySelector(".score");
let title = document.querySelector("h1");
let background = document.querySelector("body");
let jumpButton = document.querySelector(".jump");
let jumpDownButton = document.querySelector(".jump-down");
let changeColorButton = document.querySelector(".change-color");
let endGameButton = document.querySelector(".end-game");
let updateScoreButton = document.querySelector(".update-score");
let growButton = document.querySelector(".grow");


jumpButton.addEventListener("click", function() {
    mario.style.bottom = "120px";
    coin.style.display = "none";
});






jumpDownButton.addEventListener("click", function() {
    mario.style = "bottom: 35px";
});





changeColorButton.addEventListener("click", function() {
    background.style.backgroundColor = "springGreen"; 
});






endGameButton.addEventListener ("click", function() {
    title.innerHTML = "Game over.";
});




x=0;
updateScoreButton.addEventListener ("click", function() {
    score.innerHTML = x;
x++;
});






growButton.addEventListener("click",function(){
    mario.style.width = "200px";
});


