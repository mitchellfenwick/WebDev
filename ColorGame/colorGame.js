var colours = [];
var pickedColour;
var numSquares = 6;
var squares = document.querySelectorAll(".square");
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButons = document.getElementsByClassName("mode");

init();

function init() {
  //mode buttons event listerners
  setupModeButtons();
  setupSquares();
  reset();
}

function setupSquares() {
  for (var i=0;i<squares.length;i++) {
    //add click listerners to squares
    squares[i].addEventListener("click", function(){
      //grab colour of clicked square
      var clickedColour = this.style.backgroundColor;
      //compare color to pickedColour
      if (clickedColour === pickedColour) {
        messageDisplay.textContent = "Correct!";
        changeColours(clickedColour);
        h1.style.backgroundColor = clickedColour;
        resetButton.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function setupModeButtons() {
  for (var i=0;i<modeButons.length;i++) {
    modeButons[i].addEventListener("click", function() {
      modeButons[0].classList.remove("selected");
      modeButons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
}

function reset() {
  //generate new colours
  colours = generateRandomColours(numSquares);
  //pick a new random colour
  pickedColour = pickColour();
  //change colour display to match picked colour
  colourDisplay.textContent = pickedColour;
  //change colours of sqaures
  for (var i=0;i<squares.length;i++) {
    if (colours[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colours[i]
    } else {
      squares[i].style.display = "none";
    }
  }
  resetButton.textContent = "New Colours";
  h1.style.backgroundColor = 'steelblue';
  messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function() {
  reset();
});

function changeColours(color) {
  //loop through all squares
  for(var i=0;i<squares.length;i++) {
  //change each colour to match picked colour
    squares[i].style.backgroundColor = color;
  }
}

function pickColour() {
  var rand = Math.floor(Math.random() * colours.length);
  return colours[rand];
}

function generateRandomColours(num) {
  //make an array
  var arr = [];
  //add num random colours to array
  for(var i=0;i<num;i++) {
    arr.push(randomColour());
  }
  return arr;
  //return that array
}

function randomColour() {
  //pick a "red" from 0-255
  var red = Math.floor(Math.random() * 256);
  //pick a "green" from 0-255
  var green = Math.floor(Math.random() * 256);
  //pick a "blue" from 0-255
  var blue = Math.floor(Math.random() * 256);
  var rgb = "rgb(" + red + ", " + green + ", " + blue + ")";
  return rgb;
}


