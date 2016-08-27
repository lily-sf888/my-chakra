//need all of the chakras
var user = {
    name: "paul",
    chakras: {
        //needs input field data stored in objects for the three questions
        love: "love is all you need",
        peace: "peace"
    }
};

module.exports = function(app, passport) {
    
    //setting up our home page which is the signup page
    app.get('/', function(req, res) {
        res.render('pages/signup.ejs', {user: user}); //load the signup.ejs file
        
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
    
    app.get('/love', function(req, res) {
        res.render('pages/love.ejs', {user: user});
    })
};