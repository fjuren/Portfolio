//
// // parantheses after handleClick aren't used here, otherwise it would run the function right away as the page loads, not when clicked by user
// document.querySelector("button").addEventListener("click",handleClick);
//
// function handleClick() {
//   alert("I got clicked");
// }


// // Alternative way to write the above:
// document.querySelectorAll("button")[count].addEventListener("click",function() {
//   alert("I got clicked");
// });


// Checks when the mouse button gets pressed
// loops through all drum buttons (that have a drum class) and applying eventListeners to each button
for (var count = 0; count < document.querySelectorAll(".drum").length; count++) {
  document.querySelectorAll("button")[count].addEventListener("click", function() {

    var mousePress = this.innerHTML;
    audioQue(mousePress);
    animateText(mousePress);

  });
}

// Checks what keyboard key gets pressed
// notes:
// for keyboard presses, we don't need to specify what keys are being pressed. We can
// refer to the entire document. See 'click' event above to notice difference.
// e can be anything and is just an event to activate the function, and gives you a bunch of information about the event (eg. the key pressed)
document.addEventListener("keydown", function(e) {
  audioQue(e.key);
  animateText(e.key);
  //console.log(e);
})


// Function for playing a sound, takes in keyboard press or mouse press as arg.
function audioQue(mouseOrKey) {
  switch (mouseOrKey) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();

      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();

      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();

      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();

      break;

    case "j":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();

      break;

    case "k":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();

      break;

    case "l":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();

      break;

    default:
      console.log(e);
  }
}

function animateText(activatedText) {

    var activeButton = document.querySelector("." + activatedText);

    activeButton.classList.add("pressed");

    setTimeout(function(){
      activeButton.classList.remove("pressed");
    }, 200);

}

// // play audio
// var audio = new Audio('sounds/crash.mp3');
// audio.play();

// // this selects specific item
// this.style.color = "white";


// // switch vs if...else
// switch (e.key) {
//   case "j":
//       var kick = new Audio('sounds/kick-bass.mp3');
//       kick.play();
//     break;
//   default: console.log(e)
//
// }
//
// if(e.key === "w") {
//   var tom3 = new Audio('sounds/snare.mp3');
//   tom3.play();
// }
