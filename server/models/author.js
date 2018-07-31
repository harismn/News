// var bcrypt   = require('bcrypt-nodejs');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/News');

mongoose.models = {};
mongoose.modelSchemas = {}
 
var AuthorSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    idUser: {
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
 
module.exports = mongoose.model('Author', AuthorSchema, 'authors');