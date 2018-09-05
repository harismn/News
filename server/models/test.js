// var bcrypt   = require('bcrypt-nodejs');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/News');

mongoose.models = {};
mongoose.modelSchemas = {}
 
var testSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    
    tittle: {
        type: String,
        index: true
    },
    content: {
        type: String,
    },
    photo: {
        data: Buffer,
        contentType: String
      },
    comments: [{
      text: String,
      created: { type: Date, default: Date.now },
      postedBy: { type: mongoose.Schema.ObjectId, ref: 'Author'}
    }],
    postedBy: {type: mongoose.Schema.ObjectId, ref: 'Author'},
    created: {
      type: Date,
      default: Date.now
    }
}, {
    timestamps: true
});
 
module.exports = mongoose.model('Test', testSchema, 'tests');