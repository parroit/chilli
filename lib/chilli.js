/*
 * chilli
 * https://github.com/parroit/chilli
 *
 * Copyright (c) 2014 Andrea Parodi
 * Licensed under the MIT license.
 */

'use strict';

var concat = [].concat;
var slice = [].slice;

module.exports = function curry(fn, thisContext) {
    var arity = fn.length;
    
    function curryCall(/*args...*/){
        var args = slice.call(arguments);
        
        if (args.length == arity) {
            return fn.apply(thisContext, args);
        }

        if (args.length < arity) {
            return function(/*newArgs...*/) {
                
                var allArgs = concat.apply(args,arguments);
                
                return curryCall.apply(null,allArgs);
            };
        }

        throw new Error('Too many arguments supplied.');

    }

    return curryCall;

};
