// var bcrypt   = require('bcrypt-nodejs');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/News');

mongoose.models = {};
mongoose.modelSchemas = {}
 
var ArticleSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    idArticle: {
        type: String,
        index: true
    },
    idAuthor: {
        type: String,
        index: true
    },
    content: {
        type: String,
        index: true
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
 
module.exports = mongoose.model('Article', ArticleSchema, 'articles');