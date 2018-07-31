const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/News');

mongoose.models = {};
mongoose.modelSchemas = {};

const CommentSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    id_article: {
      type: String,
      index: true,
    },
    id_user: {
      type: String,
      index: true,
    },
    detail: {
      type: String,
      index: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Comment', CommentSchema, 'comments');
