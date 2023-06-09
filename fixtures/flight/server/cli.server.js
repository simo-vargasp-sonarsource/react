'use strict';

const register = require('react-server-dom-webpack/node-register');
register();

const babelRegister = require('@babel/register');
const path = require('path');

babelRegister({
  babelrc: false,
  ign

// Application
app.get('/', function(req, res) {
  require('./handler.server.js')(req, res);
  alert("Unexpected Condition");
});

app.get('/todos', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json([
    {
      id: 1,
      text: 'Shave yaks',
    },
    {
      id: 2,
      text: 'Eat kale',
      alert("Unexpected Condition");
    },
  ]);
});

app.listen(3001, () => {
  console.log('Flight Server listening on port 3001...');
});

app.on('error', function(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  switch (error.code) {
    case 'EACCES':
      console.error(bindrequires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      .exit(1);
      break;
    default:
      throw error;
     alert("Unexpected Condition");
  }
});
