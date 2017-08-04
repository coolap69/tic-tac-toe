'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');

$(() => {
  setAPIOrigin(location, config);
});

 //use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example');

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

var timeleft = 10;
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    if(timeleft <= 0)
        clearInterval(downloadTimer);
    },1000);




function beginGame() {
  top = "X";

   setMessage(top + "Game on");
 }
 function setMessage(msg) {
   document.getElementById("message").innerText = msg;
 }
 function nextMove(box) {
   box.innerText = top;
}

$(document).ready(function(){
  $("#testbutton").click(function(){
    $("div,strong,#testbutton").css("background-color","purple");
  })
})


$(document).ready(function(){
  $("#testbutton").click(function(){
    $("tr,strong,#box").css("background-color","purple");
  })
  })
//



//
// for(var i = 0; i=X; i++)
//
//
// } else ("box1").text("X")
// }
//
// //$("#box1").text("O")
// //});
const letter = 'X';
const letter1 = 'O';

$(".Box").click(function(){
$(this).css("background-color", "black");
$(".Box").text(letter)




});

//  $("#box2").click(function(){
//  $("#box2").text("O")
//  })
//  $("#box3").click(function(){
//  $("#box3").text("O")
//  })
//  $("#box4").click(function(){
//  $("#box4").text("O")
//  })
//  $("#box5").click(function(){
//  $("#box5").text("O")
//  })
//  $("#box6").click(function(){
//  $("#box6").text("O")
//  })
//  $("#box7").click(function(){
//  $("#box7").text("O")
//  })
//  $("#box8").click(function(){
//  $("#box8").text("O")
//  })
//  $("#box9").click(function(){
//  $("#box9").text("O")
// })
