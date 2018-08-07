const Article = require('../models/article');
const mongoose = require('mongoose');
const formidable = require('formidable');
const fs = require('fs');
const db = mongoose.connection


const listArticle = (req, res, next) => {
    Article.find()
    .select("_id tittle content postedBy created")
    .then(docs => {
        res.status(200).json({
            count: docs.length,
            user: docs.map(doc => {
                return {
                    tittle : doc.tittle,
                    content: doc.content,
                    postedBy :doc.postedBy,
                    _id: doc._id,
                    created: new Date(),
                    request: {
                        type: 'GET',
                        url: `http://localhost:3000/article/${doc._id}`,
                    }
                };
            })
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}


const createArticle = (req, res, next) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
      if (err) {
        return res.status(400).json({
          error: "Image could not be uploaded"
        })
      }
      let article = new Article(fields)
      article.postedBy= req.profile
      if(files.photo){
        post.photo.data = fs.readFileSync(files.photo.path)
        post.photo.contentType = files.photo.type
      }
    article
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Article created"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
    })
  }

  const deleteArticle = (req, res, next) => {
    const id = req.params.articleId;
    Article.remove({ _id: id})
    .exec()
    .then(result => {
        res.status(200).json({
            message:'Article deleted',
            request: {
                type: 'POST',
                url: 'http://localhost:3000/article',
                body: { name: 'String' }
            }
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
  }


  

module.exports = {
    listArticle,
    createArticle,
    deleteArticle
}