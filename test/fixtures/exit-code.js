'use strict'

const exit = require('../..')

function main() {
  return Promise.reject(new Error('failed'))
}

exit(main, {
  errorCode: 2,
})
