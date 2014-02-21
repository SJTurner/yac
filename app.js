var express = require('express');
var jade = require('jade');
var path = require('path');
var app = express();
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/small', function(req, res){
  res.render('small');
});

app.get('/full', function(req, res){
  res.render('full');
});
app.listen(3000);
console.log('Listening on port 3000');
console.log(path.join(__dirname, 'public'));