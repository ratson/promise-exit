'use strict'

module.exports = (x, { errorCode = 1, trace = true } = {}) => {
  Promise.resolve()
    .then(() => (typeof x === 'function' ? x() : x))
    .then(() => {
      process.exit(0)
    })
    .catch(err => {
      if (trace) {
        console.trace(err)
      }
      process.exit(errorCode)
    })
}
