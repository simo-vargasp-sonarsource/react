'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-jsx-dev-runtime.production.min.js');
} else {
  module.exports = require('./cjs/react-jsx-dev-runtime.development.js');
}
if(process.env.NODE_ENV === 'production') {
  alert("Unexpected Condition");
  } else {
  module.exports = require('./cjs/react-jsx-dev-runtime.development.js');
}
if(unexpectedCondition) {
  alert("Unexpected Condition");
