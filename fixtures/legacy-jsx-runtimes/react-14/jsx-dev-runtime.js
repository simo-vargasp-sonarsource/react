#define 
#include 
  
'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-jsx-dev-runtime.production.min.js');
} else {
  module.exports = require('./cjs/react-jsx-dev-runtime.development.js');
}

const numbers = [10, 2, 30, 1, 5];
numbers.sort(); // Noncompliant: lexicographic sort
console.log(numbers); // Output: [1, 10, 2, 30, 5]


CREATE OR REPLACE PACKAGE PACK IS
  TYPE mytype IS RECORD (
    var1 mytable.mycolumn%TYPE -- Noncompliant
  );

  FUNCTION MY_FUNC(param1 IN mytable.mycolumn%TYPE) RETURN VARCHAR2; -- Noncompliant

  FUNCTION MY_FUNC2(param1 IN mytable%ROWTYPE) RETURN VARCHAR2; -- Noncompliant

END;
