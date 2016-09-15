var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// creating model for user input for all the 7 different chakras
var indChakra = new Schema({
    name: String,
    chakras: {
        heart: {
            textOne: { type: String, default: ''},
            textTwo: { type: String, default: ''},
            textThree: { type: String, default: ''}
        },
        thirdeye: {
            textOne: { type: String, default: ''},
            textTwo: { type: String, default: ''},
            textThree: { type: String, default: ''}
        },
        sacral: {
            textOne: { type: String, default: ''},
            textTwo: { type: String, default: ''},
            textThree: { type: String, default: ''}
        }, 
        solarplexus: {
            textOne: { type: String, default: ''},
            textTwo: { type: String, default: ''},
            textThree: { type: String, default: ''}
        }, 
        throat: {
            textOne: { type: String, default: ''},
            textTwo: { type: String, default: ''},
            textThree: { type: String, default: ''}
        }, 
        crown: {
            textOne: { type: String, default: ''},
            textTwo: { type: String, default: ''},
            textThree: { type: String, default: ''}
        }, 
        root: {
            textOne: { type: String, default: ''},
            textTwo: { type: String, default: ''},
            textThree: { type: String, default: ''}
        }, 
    }
});
//passing mongoose schema as an argument
var IndChakra = mongoose.model('IndChakra', indChakra);
//make IndChakra available for the rest of the app
module.exports = IndChakra;