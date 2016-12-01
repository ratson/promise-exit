# promise-exit

Run process.exit() after a promise has finished.

## Installation

```
npm install promise-exit --save-dev
```

## Usage

```js
import exit from 'promise-exit'

function main() {
  return Promise.resolve('Hello World!')
}

exit(main())

// even shorter when no arguments is needed
exit(main)
```
