'use strict'

const setAPIOrigin = require('../../lib/set-api-origin.js')
const config = require('./config.js')
const event = require('./auth/event.js')
$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  $('#signUp').on('submit', event.onSignUp)
  $('#signIn').on('submit', event.onSignIn)
  $('#changePassword').on('submit', event.onChangePassword)
  $('#signOut').on('submit', event.onSignOut)
  $('#create-game').on('submit', event.onCreateGame)
  $('#updateGame').on('submit', event.onUpdateGame)

  $('.game').children().hide()
})

/// timer ///
let timeleft = 10
const downloadTimer = setInterval(function () {
  timeleft--
  document.getElementById('countdowntimer').textContent = timeleft
  if (timeleft <= 0) {}
  clearInterval(downloadTimer)
}, 1000)

let player = 'X'
// let draw = 0

$('.Box').click(function () {
  // detect if Box already has an X or O in it, if so, end this function
  if ($(this).text() === 'X' || $(this).text() === 'O') {
    // alert('choose another box')
    $('h4').html('<p>Pick Another Box</p>')
    return
  }

  // make a function that clears the board //

  const updateGame = function () {
    $('#box1').removeClass('X O')
    $('#box2').removeClass('X O')
    $('#box3').removeClass('X O')
    $('#box4').removeClass('X O')
    $('#box5').removeClass('X O')
    $('#box6').removeClass('X O')
    $('#box7').removeClass('X O')
    $('#box8').removeClass('X O')
    $('#box9').removeClass('X O')
  }
  $('#clear').click(updateGame)

  // chane the Box with the approriate player symbol, and the background color to black
  $(this).css('background-color', 'black')
  $(this).text(player)

  // here are the winning cell combinations
  const winnerNumbers = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 8], [8, 4, 0], [8, 4, 2],
    [7, 4, 1], [0, 2, 1]]

  // for a draw, count number of boxes with a move in them. if it equals 9, it's a draw

  // const drawNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  // let drawLoc = []

  // here is where you collect the cells with moves for the current player
  const locations = []

  // go through each Box and check if it has an X if player is X, or O if player is O, and put location in locations array
  $('.Box').each(function (index, element) {
    const eletext = $(element).text()

    // if player is X and Box contains X
    if (player === 'X' && eletext === 'X') {
      locations.push(index)
      $('h4').html('<p>Player O Turn</p>')

    // if player is O and Box contains O
    } else if (player === 'O' && eletext === 'O') {
      locations.push(index)
      $('h4').html('<p>Player X Turn</p>')
    }
  })

  // check if your players move locations is in winnerNumbers, and if it is say "you won" in the console
  const locationString = locations.toString()
  winnerNumbers.map(function (win) {
    if (locationString === win.toString()) {
      $('h4').html('<p>You are the Bomb!</p>')
    // } else {
    //   drawNumbers (function() === != 9 {
    //   $('h4').html('<p>Draw!</p>')
    }
  })

  // const drawing = []
  // const drawString = drawNumbers.toString()
  // drawNumbers.map(function (win) {
  //   if (drawString === true) {
  //     $('h4').html('<p>Draw</p>')
  //     console.log('draw')
  //   }
  // })

  // switch the player so the next player can play
  if (player === 'X') {
    player = 'O'
    // $('h4').html('<p>Player O Turn</p>')
  } else {
    player = 'X'
    // $('h4').html('<p>Player X Turn</p>')
  }
})
