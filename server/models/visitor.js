// var bcrypt   = require('bcrypt-nodejs');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/News');



mongoose.models = {};
mongoose.modelSchemas = {}
 
var VisitorSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id_user: {
        type: String,
        index: true
    },
    gender: {
        type: String,
        index: true
    },
    address: {
        type: String,
        index: true
    },

 
}, {
    timestamps: true
});
 
module.exports = mongoose.model('Visitor', VisitorSchema, 'visitors');