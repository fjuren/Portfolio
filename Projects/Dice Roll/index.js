// randon number for dice Roll
var randNum1 = Math.floor(Math.random() * 6) + 1; // range 1-6
var randNum2 = Math.floor(Math.random() * 6) + 1; // range 1-6

// auto naming the path based on random dice roll result
var randImg1 = "images/dice" + randNum1 + ".png"; // images/dice1.png - images/dice6.png
var randImg2 = "images/dice" + randNum2 + ".png"; // images/dice1.png - images/dice6.png

// specifying the image selector and calling the attribute that contains each players dice image
document.querySelectorAll("img")[0].setAttribute("src",randImg1); // player 1 dice
document.querySelectorAll("img")[1].setAttribute("src",randImg2); // player 2 dice

// Returns the title of who wins
if(randNum1 > randNum2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if(randNum1 < randNum2) {
  document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else {
  document.querySelector("h1").innerHTML = "It's a draw!";
}
