var express = require('express');
var passport = require('passport');

var app = express();

//set up ejs for templating
app.set('view engine', 'ejs');

//set up static files
app.use(express.static('views'));

//load our routes and pass in our app and passport
require('./app/routes.js')(app, passport);

app.listen(process.env.PORT || 8080);

exports.app = app;

console.log('listening');