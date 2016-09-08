var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var indChakra = new Schema({
    name: String,
    chakras: {
        heart: {
            textOne: String,
            textTwo: String,
            textThree: String
        },
        thirdeye: {
            textOne: String,
            textTwo: String,
            textThree: String
        },
        sacral: {
            textOne: String,
            textTwo: String,
            textThree: String
        }, 
        solarplexus: {
            textOne: String,
            textTwo: String,
            textThree: String
        }, 
        throat: {
            textOne: String,
            textTwo: String,
            textThree: String
        }, 
        crown: {
            textOne: String,
            textTwo: String,
            textThree: String
        }, 
        root: {
            textOne: String,
            textTwo: String,
            textThree: String
        }, 
    }
});

var IndChakra = mongoose.model('indChakra', indChakra);

module.exports = IndChakra;