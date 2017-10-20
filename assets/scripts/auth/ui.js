'use strict'

const app = require('../store.js')
const hide = require('./hide.js')

const onSignUpSuccess = (data) => {
  hide.signUp()
  console.log('You successfully created an account')
  app.user = data.user
}

const onError = function (response) {
  console.error(response)
}

const onSignInSuccess = function (data) {
  hide.signIn()
  hide.hideGame()
  console.log('You successfully sign in')
  app.user = data.user
}

const onSignInError = function (response) {
  console.error(response)
}

const onChangePasswordSuccess = function () {
  console.log('You succesfully change your password')
}

const onChangePasswordError = function (response) {
  console.log(response)
}

const onSignOutSuccess = function () {
  console.log('You successfully sign out')
  app.user = null
}

const onSignOutError = function (response) {
  console.log(response)
}

const onCreateGameSuccess = function (data) {
  console.log('You created a new game')
  console.log(data)
  app.game = data.game
  app.game.id = data.game.id
  // $('#password-success').hide()
}

const onCreateGameError = function (response) {
  console.log(response)
  console.log('err')
}

const onUpdateGameSuccess = function (data) {
  console.log('You updated a new game')
  console.log(data)
}

const onUpdateGameFailure = function (response) {
  console.log(response)
  console.log('err')
}

const onGetHistorySuccess = function (data) {
  console.log('You updated a new game')
  console.log(data)
}

const onGetHistoryFailure = function (response) {
  console.log(response)
  console.log('err')
}
module.exports = {
  onSignUpSuccess,
  onError,
  onSignInSuccess,
  onSignInError,
  onChangePasswordSuccess,
  onChangePasswordError,
  onSignOutSuccess,
  onSignOutError,
  onCreateGameSuccess,
  onCreateGameError,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  onGetHistorySuccess,
  onGetHistoryFailure
}
