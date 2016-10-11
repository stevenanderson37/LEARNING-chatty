var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());


app.get('/', function( req, res ) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify(messages));
});

var messages = [
  {
    message: "prefilled messages are so much fun",
    // time:
  },
  {
    message: "hello hello hello",
    // time:
  },
  {
    message: "my son loves poop jokes",
    // time:
  }
];

app.options('/', function(req, res, next) {
  res.status(200).set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  }).send();
});

app.post('/', function(req, res) {

  messages.push({
    message: req.body.message,
    time: new Date()
  });

  res.status(200).set({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  'X-XSS-Protection': '1; mode=block',
  'X-Frame-Options': 'SAMEORIGIN',
  'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify(messages));

  // res.end();
});











app.listen(8000, function() {
  console.log("listening on port 8000")
  });
