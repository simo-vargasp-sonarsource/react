'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-jsx-dev-runtime.production.min.js');
} else {
  module.exports = require('./cjs/react-jsx-dev-runtime.development.js');
}
/* some comment, end comment marker accidentally omitted
// Make sure this function is called in a thread safe context
Perform_Critical_Safety_Function(X);
...
/* this comment is non-compliant */
