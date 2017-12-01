
const babelRegister = require('babel-register');

babelRegister();

require.extensions['.css'] = function() {};
