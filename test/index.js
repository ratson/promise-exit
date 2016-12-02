import test from 'ava'

import exit from '../lib'

test('throw for non-promise', (t) => {
  t.throws(() => exit(() => {}), /no promise-like object/)
})
