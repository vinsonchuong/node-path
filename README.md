# set-node-path
Set the Node.js module search path.

## Installing
`set-node-path` is available as an
[npm package](https://www.npmjs.com/package/set-node-path).

## Usage
```js
const path = require('path');

require('set-node-path')(
  path.resolve('.'),
  path.resolve('vendor')
);

// Resolves to './foo.js'
require('project/foo');
```
