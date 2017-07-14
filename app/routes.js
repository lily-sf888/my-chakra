//stores the object containing strings describing the chakras
var chakrasData = require("./models/chakras");
//importing model that stores the user name and password
var User = require("./models/user");
//stores the three user inputs for each of the seven chakras
var IndChakra = require("./models/indChakra");

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
        res.render('pages/login.ejs', {message: req.flash('loginMessage')} );
    });
    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/mychakras', // redirect to the secure mychakras section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
    //show my chakras page
    app.get('/mychakras', function(req, res) {
        if(!req.user) res.redirect('/login');
        //accessing unique user id
        var id = req.user._id;
        //looking for user by key id
        IndChakra.findOne({name: id}).lean().exec(function (err, mainObj) {
            if (err) console.error(err);
            //check if chakras object exist, if it doesn't create a new chakras object
            if(!mainObj) {
                var indChakra = new IndChakra();
                indChakra.name = id;
                //save new user into database
                indChakra.save(function(err){
                    if(err) console.error(err);
                });
            }
        });
        res.render('pages/mychakras.ejs');
    });
    //this route gets hit when user clicks on submit and fires off the ajax request
    app.post('/update-chakra', function(req, res) {
        if(!req.user) res.redirect('/login');
        //if user exists access their key id and current chakra they're on
        var id = req.user._id;
        var current = req.body.current
        //finding existing user in our database
        IndChakra.findOne({name: id}).lean().exec(function (err, mainObj) {
            if (err) console.error(err)
            //adding user input to the current chakra user is on
            mainObj.chakras[current] = req.body.userInput
            //update our database with new user input
            IndChakra.update({name: id}, mainObj, function(err, upDated){
                if(err) console.error("ERROR", err)
                // send status code response
                res.sendStatus(200);
            });
        });
    });
    //accessing the individual chakra pages which are generated dynamically
    app.get('/mychakras/:chakra', function(req, res) {
        if(!req.user) res.redirect('/login');
        //accessing current chakra page user is on
        chakrasData.current = req.params.chakra;

        //retrieve data from indChakras model (findOne)
        IndChakra.findOne({name: req.user._id}).lean().exec(function (err, mainObj) {
            if (err) console.error(err)
            //attaching user text input for individual chakra
            chakrasData.inputs = mainObj
            //pass in whole array instead of just chakrasData
            res.render('pages/chakra.ejs', {user: chakrasData});
        });
    });
    //logout user
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/login');
    });
};
