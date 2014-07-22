/*
 * chilli
 * https://github.com/parroit/chilli
 *
 * Copyright (c) 2014 Andrea Parodi
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai');
chai.expect();
chai.should();

var chilli = require('../lib/chilli.js');

describe('chilli', function(){
    it('is defined', function(){
      chilli.should.be.a('function');
    });

});
