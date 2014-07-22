# chilli 

will curry your functions

[![Build Status](https://secure.travis-ci.org/parroit/chilli.png?branch=master)](http://travis-ci.org/parroit/chilli) [![NPM version](https://badge-me.herokuapp.com/api/npm/chilli.png)](http://badges.enytc.com/for/npm/chilli) 

## Getting Started
Install the module with: `npm install chilli`

```javascript
var curry = require('chilli');
var sum = curry(function(a, b) {
    return a + b;
});

var sum3 = sum(3);
var result = sum3(5);

//result === 8
//
```

## Other stuff

* documentation - maybe I will add documentation if you ask it. open an issue for this.
* support - open an issue [here](https://github.com/parroit/chilli/issues).

## License
[MIT](http://opensource.org/licenses/MIT) © 2014, Andrea Parodi