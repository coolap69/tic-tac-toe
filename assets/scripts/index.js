'use strict'

const setAPIOrigin = require('../../lib/set-api-origin.js')
const config = require('./config.js')
const events = require('./auth/event.js')
$(() => {
  setAPIOrigin(location, config)
   // do I add config.apiOrigins.production here?
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example');
//use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example');



//  Pseudocode for game board
//
// Create board (Mobile friendly)
//
//  Built 9 function squares
//
//
// Pick random user to go first and pick a random weapon for first user if is X or O
// Hover to any of the 9 squares and change color
// Pick a square out of the 9 (how each square can function?
// Each square needs to be a able to change to X or to O
// After 1 user picks an X the next user should be able to add the O
// After a square has been used noone is allowed to touch it until new game start
//
//
// How to win the game
//    Three  X wins= horizontal, vertical, diagonal =
//       Three OOO wins= horizontal, vertical, diagonal
//
//    if there is no 3 X or 3 0 = Draw
//
//
//  2 users each user has a 10 second decision to mark a spot or else will get a forfeit loss

let timeleft = 10;
let downloadTimer = setInterval(function() {
  timeleft--;
  document.getElementById("countdowntimer").textContent = timeleft;
  if (timeleft <= 0)
    clearInterval(downloadTimer);
}, 1000);






// choose starting player as X
let player = 'X';


// do this when a Box is clicked
$(".Box").click(function() {
  // detect if Box already has an X or O in it, if so, end this function
  if ($(this).text() == 'X' || $(this).text() == 'O') {
    alert("choose another box")
    return
  }

  // chane the Box with the approriate player symbol, and the background color to black
  $(this).css("background-color", "black");
  $(this).text(player);

  // here are the winning cell combinations
  const winnerNumbers = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0,4,8],[2,4,8],[8,4,0], [8,4,2]];
  // const draw = {0,1,2,3,4,5,6,7,8,9}

  // here is where you collect the cells with moves for the current player
  let locations = [];

  // go through each Box and check if it has an X if player is X, or O if player is O, and put location in locations array
  $(".Box").each(function(index, element) {
    let eletext = $(element).text()
    // if player is X and Box contains X
    if (player == "X" && eletext == "X") {
      locations.push(index)
    // if player is O and Box contains O
    } else if (player == "O" && eletext == "O") {
      locations.push(index)


    }
  })

  // check if your players move locations is in winnerNumbers, and if it is say "you won" in the console
  let locationString = locations.toString();
  winnerNumbers.map(function(win) {
    if (locationString == win.toString()) {
      alert('you won')
      return
    }
  })

  // for a draw, count number of boxes with a move in them. if it equals 9, it's a draw



  // switch the player so the next player can play
  if (player == 'X') {
    player = 'O'
  } else {
    player = 'X'
  }

});
