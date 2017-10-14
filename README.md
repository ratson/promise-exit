# promise-exit

Run `process.exit()` after a promise function has completed.

## Installation

```
npm install promise-exit --save-dev
```

## Usage

```js
const exit = require('promise-exit')

function main() {
  return Promise.resolve('Hello World!')
}

if (require.main === module) {
  exit(main)

  // custom error exit code, default to `1`
  exit(main, { errorCode: 255 })

  // do not print traceback, default to `true`
  exit(main, { trace: false })

  // pass arguments to function
  exit(main(process.argv))
}
