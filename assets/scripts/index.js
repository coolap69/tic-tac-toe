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
  // $('#play').click(event.onCreateGame)
  // $('#createGame').click(event.onCreateGame)
  // $('#postButton').on('click', event.onGetService)
  // $('#deleteButton').on('submit', accountEvents.onDeletePost)//
  $('#create-game').on('submit', event.onCreateGame)

  $('.game').children().hide()
})

// const createBoard = function () {
//   $('.container-fluid border').removeClass('hidden')
//   $('#createGame').removeClass('hidden')
// }
//
// $('#play').click(createBoard)
// const createGame = function () {
//   $('#box1').removeClass('X O')
//   $('#box2').removeClass('X O')
//   $('#box3').removeClass('X O')
//   $('#box4').removeClass('X O')
//   $('#box5').removeClass('X O')
//   $('#box6').removeClass('X O')
//   $('#box7').removeClass('X O')
//   $('#box8').removeClass('X O')
//   $('#box9').removeClass('X O')
// }
//
// $('#createGame').click(createGame)

/// timer ///
let timeleft = 10
const downloadTimer = setInterval(function () {
  timeleft--
  document.getElementById('countdowntimer').textContent = timeleft
  if (timeleft <= 0) {}
  clearInterval(downloadTimer)
}, 1000)

let player = 'X'

$('.Box').click(function () {
  // detect if Box already has an X or O in it, if so, end this function
  if ($(this).text() === 'X' || $(this).text() === 'O') {
    // alert('choose another box')
    $('h4').html('<p>Pick Another Box</p>')
    return
  }

  // chane the Box with the approriate player symbol, and the background color to black
  $(this).css('background-color', 'black')
  $(this).text(player)

  // here are the winning cell combinations
  const winnerNumbers = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 8], [8, 4, 0], [8, 4, 2],
    [7, 4, 1]]
  // const draw = {0,1,2,3,4,5,6,7,8,9}

  // here is where you collect the cells with moves for the current player
  const locations = []

  // go through each Box and check if it has an X if player is X, or O if player is O, and put location in locations array
  $('.Box').each(function (index, element) {
    const eletext = $(element).text()
    // if player is X and Box contains X
    if (player === 'X' && eletext === 'X') {
      locations.push(index)
    // if player is O and Box contains O
    } else if (player === 'O' && eletext === 'O') {
      locations.push(index)
    }
  })

  // check if your players move locations is in winnerNumbers, and if it is say "you won" in the console
  const locationString = locations.toString()
  winnerNumbers.map(function (win) {
    if (locationString === win.toString()) {
      $('h4').html('<p>You are the Bomb!</p>')
    }
  })

  // for a draw, count number of boxes with a move in them. if it equals 9, it's a draw

  // switch the player so the next player can play
  if (player === 'X') {
    player = 'O'
  } else {
    player = 'X'
  }
})
