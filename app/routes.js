//need all of the chakras
var user = require("./models/chakras.js");

module.exports = function(app, passport) {
    
    //setting up our home page which is the signup page
    app.get('/', function(req, res) {
        res.render('pages/signup.ejs'); //load the signup.ejs file
        
    });
    
    //show login form
    app.get('/login', function(req, res) {
        res.render('pages/login.ejs');
    });
    
    //show profile form
    app.get('/profile', function(req, res) {
        res.render('pages/profile.ejs'); 
    });
    
    app.get('/mychakras', function(req, res) {
        res.render('pages/mychakras.ejs');
    })
    //creating chakras pages dynamically
    app.get('/mychakras/:chakra', function(req, res) {
        user.current = req.params.chakra;
        res.render('pages/chakra.ejs', {user: user});
    })
    
    app.get('/root', function(req, res) {
        res.render('pages/root.ejs');
    })
};