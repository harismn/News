const Article = require('../models/article');
const mongoose = require('mongoose');
const formidable = require('formidable');
const fs = require('fs');
const db = mongoose.connection


const listArticle = (req, res, next) => {
    Article.find()
    .select("idArticle idArticle id_")
    .then(docs => {
        res.status(200).json({
            count: docs.length,
            user: docs.map(doc => {
                return {
                    idArticle: doc.idArticle,
                    idAuthor: doc.idAuthor,
                    content: doc.content,
                    _id: doc._id,
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


  

module.exports = {
    listArticle,
    createArticle,
}