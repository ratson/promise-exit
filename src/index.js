export default (x) => {
  const p = typeof x === 'funtion' ? x() : x
  p.then(() => {
    process.exit(0)
  }).catch((err) => {
    console.error(err.stack)
    process.exit(1)
  })
}
