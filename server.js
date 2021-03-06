//get all the tools we need
var express = require('express');
var passport = require('passport');
var app = express();
var port = process.env.PORT || 8080
var mongoose = require('mongoose');
var flash = require('connect-flash');
var http = require('http');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var configDB = require('./config/database.js');

//configuration
mongoose.connect(configDB.url); //connect to our database

require('./config/passport')(passport); //pass passport for configuration

//set up static files
app.use(express.static('views'));

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

//set up ejs for templating
app.set('view engine', 'ejs');

// required for passport
app.use(session({ secret: 'ilovelovelove' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

//load our routes and pass in our app and passport
require('./app/routes.js')(app, passport);

exports.app = app;

app.listen(port);

console.log('listening on port ' + port);
