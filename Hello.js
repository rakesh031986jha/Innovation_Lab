var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Welcome to Node JS  World! india ');
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on localhost:'+ port);
