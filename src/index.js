export default (x) => {
  const p = typeof x === 'function' ? x() : x
  p.then(() => {
    process.exit(0)
  }).catch((err) => {
    console.error(err.stack)
    process.exit(1)
  })
}
