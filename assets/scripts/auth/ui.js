'use strict'

const app = require('../app.js')
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

module.exports = {
  onSignUpSuccess,
  onError,
  onSignInSuccess,
  onSignInError,
  onChangePasswordSuccess,
  onChangePasswordError,
  onSignOutSuccess,
  onSignOutError
}
