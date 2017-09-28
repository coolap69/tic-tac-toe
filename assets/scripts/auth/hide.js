'use strict'

const signIn = function () {
  $(() => {
    console.log('in the beginning')
    $('.container').children().hide()
    console.log('Log in')
  })
}

const signUp = function () {
  $(() => {
    console.log('in the beginning')
    $('.container').children().hide()
    console.log('Sucess')
  })
}

module.exports = {
  signIn,
  signUp
}
