var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');

var should = chai.should();
var app = server.app;
var storage = server.storage;

chai.use(chaiHttp);

//add test to make sure we are hitting up the root url for the client and get a 200 status code and HTML
describe('signup page', function() {
    it('exists', function(done) {
        chai.request(app)
        .get('/')
        .end(function(err, res) {
            res.should.have.status(200);
            res.should.be.ejs;
            done();
        });
    });
});

//testing the login page exist
describe('login page', function() {
    it('exists', function(done) {
       chai.request(app)
       .get('/login')
       .end(function (err, res) {
            res.should.have.status(200);
            res.should.be.ejs;
           done();
       });
    });
});

//testing one of the individual chakra page exist
describe('root page', function() {
    it('exists', function(done) {
       chai.request(app)
       .get('/mychakras/root')
       .end(function (err, res) {
            res.should.have.status(200);
            res.should.be.ejs;
           done();
       });
    });
});