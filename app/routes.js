//need all of the chakras
var chakrasData = require("./models/chakras.js");
var User = require("./models/user.js");

// hard code in your user under a variable name


module.exports = function(app, passport) {
    
    //setting up our home page which is the signup page
    app.get('/', function(req, res) {
        res.render('pages/signup.ejs', { message: req.flash('signupMessage') }); //load the signup.ejs file
    });
    
    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/login', // redirect to the login page
        failureRedirect : '/', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    //show login form
    app.get('/login', function(req, res) {
        console.log("In Login:", req.user);
        res.render('pages/login.ejs', {message: req.flash('loginMessage')} );
    });
    
    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/mychakras', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    //show my chakras page
    app.get('/mychakras', function(req, res) {
        res.render('pages/mychakras.ejs');
    })
    
    //process AJAX request
    // Do me first!!!!
    app.post('/update-chakra', function(req, res) {
        var id = req.user._id;
        console.log('update:', req.body);
        console.log('user', req.user);
        req.user.chakras = "hello";
        
        // req.user = {
        //      // a bunch of other data
        //      chakras: {  // 
        //          crown: {
        //              // all user data for ind chakras
        //          }
        //       }
        //     }
        
        console.log("Updated Object:", req.user)


        User.findByIdAndUpdate(id, req.user, {new: true}, function(updatedUser) {
            console.log(updatedUser);
        })
        //update database
    });
    
    
    
    
    //creating the seven different chakras pages dynamically
    //  Do me SECOND!!!
    app.get('/mychakras/:chakra', function(req, res) {
        chakrasData.current = req.params.chakra;
        //retrieve data from database
        // User.findById(id, function(userInfo){
        //     // attach the chakras data to the userInfo object
        //     res.render('pages/chakra.ejs', {user: chakrasData});
        // })
            
         
        res.render('pages/chakra.ejs', {user: chakrasData});
        
    });
    //logout user
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

};