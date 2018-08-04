const Article = require('../models/article');
const mongoose = require('mongoose');
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

const postArticle = (req, res, next) => {
    let article = new Article({
    _id: new mongoose.Types.ObjectId(),
    idArticle: req.body.idArticle,
    idAuthor: req.body.idAuthor,
    content: req.body.content
    });
    article.save
    .then(result => {
        res.status(201).json({
            message: "Create new Article saccesfully",
            createArticle: {
                _id: result._id,
                idArticle: result.idArticle,
                idAuthor: result.idAuthor,
                content: result.content,
                request: {
                    type: 'POST',
                    url: `http://localhost:3000/article/${doc._id}`,
                }
            }
        })
    })
}

module.exports = {
    listArticle,
}