import test from 'ava'

import exit from '..'

test('throw for non-promise', t => {
  t.throws(() => exit(() => {}), /no promise-like object/)
})
