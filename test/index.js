import test from 'ava'
import execa from 'execa'

import exit from '..'

test('exit 0', async t => {
  const r = await execa('node', ['./fixtures/non-promise'], {
    cwd: __dirname,
  })
  t.is(r.code, 0)
})

test('exit 0', async t => {
  const r = await execa('node', ['./fixtures/promise-resolve'], {
    cwd: __dirname,
  })
  t.is(r.code, 0)
})

test('exit 1', async t => {
  const r = await execa('node', ['./fixtures/promise-reject'], {
    cwd: __dirname,
    reject: false,
  })
  t.is(r.code, 1)
  t.regex(r.stderr, /Trace: Error: failed/)
})

test('custom exit code', async t => {
  const r = await execa('node', ['./fixtures/exit-code'], {
    cwd: __dirname,
    reject: false,
  })
  t.is(r.code, 2)
})
