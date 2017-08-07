// this file isnt transpiled, use es5

// register babel to transpile before tests run.
require('babel-register');

// disable webpack features that mocha doesnt understand
require.extensions['.css'] = function() {};
