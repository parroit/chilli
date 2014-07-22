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

var curry = require('../lib/chilli.js');

describe('chilli', function() {
    it('is defined', function() {
        curry.should.be.a('function');
    });
    
    var sum = curry(function(a, b) {
        return a + b;
    });

    var sum3 = sum(3);
    var result = sum3(5);



    it('return result when all args supplied', function() {
        result.should.be.equal(8);
    });

    it('return partial applyed fn when not all args supplied', function() {
        sum3.should.be.a('function');
    });
});
