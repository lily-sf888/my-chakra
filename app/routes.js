//need all of the chakras
var chakrasData = require("./models/chakras");
var User = require("./models/user");
var IndChakra = require("./models/indChakra");
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
        successRedirect : '/mychakras/crown', // redirect to the secure profile section
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
        
        if(req.user) {
            var id = req.user._id;
            var current = req.body.current;
            
            var options = {
                new: true,
                upsert: true
            }
            
            IndChakra.findOne({name: id}).lean().exec(function (err, mainObj) {
                if (err) console.error(err)
                
                if(!mainObj) {
                    
                    console.log("ID", id)
                    
                    var indCharkra = new IndChakra()
                    indCharkra.name = id
                    indCharkra.chakras = {}
                    indCharkra.chakras[current] = req.body.userInput
                    
                    
                    console.log('IND', indCharkra)
                    
                    
                    indCharkra.save(function(err){
                        if(err) console.error(err)
                    })
                    
                } 
                
                else {
                    console.log("bottom hi")
                    
                    mainObj.chakras[current] = req.body.userInput
                    IndChakra.update({name: id}, mainObj, function(err, upDated){
                        if(err) console.error("ERROR", err)
                        console.log("UPDATED", mainObj)
                    });
                }
            });
        }
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
        res.redirect('/login');
    });

};