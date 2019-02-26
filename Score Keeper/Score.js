var p1Button = document.querySelector("#P1");
var p1Display = document.querySelector("#p1Display");
var p2Button = document.querySelector("#P2");
var p2Display = document.querySelector("#p2Display");
var resetButton = document.querySelector("#Reset");

var score = document.querySelector("h1");
var input = document.querySelector("input");
var limit = document.querySelector("#limit");

var gameOver = false;

p1Score = 0;
p2Score = 0;
var winningScore = 0;

input.addEventListener("change", function(){
    limit.textContent = input.value;
    winningScore = Number(limit.textContent);
    reset();
})




p1Button.addEventListener("click", function() {
    if (!gameOver){
        p1Score++;
        p1Display.textContent = p1Score;
        if (p1Score === winningScore) {
            p1Display.classList.add("winner");
            gameOver = true;
        }
    }
});

p2Button.addEventListener("click", function() {
    if (!gameOver){
        p2Score++;
        p2Display.textContent = p2Score;
        if (p2Score === winningScore) {
            p2Display.classList.add("winner");
            gameOver = true;
        }
    }
})

resetButton.addEventListener("click", function(){
    reset();
})

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}

