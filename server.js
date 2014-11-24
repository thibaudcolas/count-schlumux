'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
  res.send('Hello, world!');
});

app.listen(3000);
