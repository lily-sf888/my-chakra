module.exports = function(app, passport) {
    
    //setting up our home page which is the signup page
    app.get('/', function(req, res) {
        res.render('signup.ejs'); //load the signup.ejs file
    });
    
    //show login form
    app.get('/login', function(req, res) {
        res.render('login.ejs');
    });
    
    //show profile form
    app.get('/profile', function(req, res) {
        res.render('profile.ejs'); 
    });
};