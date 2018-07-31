const Comment = require('../models/comment');
const mongoose = require('mongoose');
const db = mongoose.connection;

const listComment = (req, res) => {
  Comment.find()
    .select('_id id_article id_user detail')
    .exec()
    .then(docs => {
      res.status(200).json({
        count: docs.length,
        comment: docs.map(doc => ({
          id_article: doc.id_article,
          id_user: doc.id_user,
          detail: doc.detail,
          _id: doc._id,
          request: {
            type: 'GET',
            url: `http://localhost:3000/comment/${doc._id}`,
          },
        })),
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

module.exports = {
  listComment,
};
