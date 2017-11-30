# babel-plugin-transform-dev-prod-expression
[![Build Status](https://travis-ci.org/maur8ino/babel-plugin-transform-dev-prod-expression.svg?branch=master)](https://travis-ci.org/maur8ino/babel-plugin-transform-dev-prod-expression)
[![bitHound Overall Score](https://www.bithound.io/github/maur8ino/babel-plugin-transform-dev-prod-expression/badges/score.svg)](https://www.bithound.io/github/maur8ino/babel-plugin-transform-dev-prod-expression)
[![bitHound Code](https://www.bithound.io/github/maur8ino/babel-plugin-transform-dev-prod-expression/badges/code.svg)](https://www.bithound.io/github/maur8ino/babel-plugin-transform-dev-prod-expression)

### What is it?

A Babel transform plugin for __DEV__ and __PROD__ expression taken inspiration from **fbjs**'s [`dev-expression`](https://github.com/facebook/fbjs/blob/v0.2.1/scripts/babel/dev-expression.js) Babel plugin.

It transforms

```javascript
if (__DEV__) {
  console.log('this is development!');
}
```

into

```javascript
if (process.env.NODE_ENV === 'development') {
  console.log('this is development!');
}
```

but also

```javascript
if (__PROD__) {
  console.log('this is production!');
}
```

into

```javascript
if (process.env.NODE_ENV === 'production') {
  console.log('this is production!');
}
```

Since they are global variables, they can evaluated in an expression along with other variables, they can be negated, etc.

## License

(The MIT License)

Copyright (c) 2017 Mauro Verrocchio.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

