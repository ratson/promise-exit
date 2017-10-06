'use strict'

module.exports = x => {
  const p = typeof x === 'function' ? x() : x
  if (!p || typeof p.then !== 'function') {
    throw new Error('no promise-like object is found')
  }
  p
    .then(() => {
      process.exit(0)
    })
    .catch(err => {
      console.trace(err)
      process.exit(1)
    })
}
