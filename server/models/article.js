// var bcrypt   = require('bcrypt-nodejs');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/News');

mongoose.models = {};
mongoose.modelSchemas = {}
 
var ArticleSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    tittle: {
        type: String,
        index: true
    },
    content: {
        type: String,
    },
    comments: [{
      text: String,
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
 
module.exports = mongoose.model('Article', ArticleSchema, 'articles');