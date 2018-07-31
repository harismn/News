const Author = require('../models/author');
const mongoose = require('mongoose');
const db = mongoose.connection


const listAuthor = (req, res, next) => {
    Author.find()
    .select("gender email _id ")
    .exec()
    .then(docs => {
        res.status(200).json({
            count: docs.length,
            user: docs.map(doc => {
                return {
                    gender: doc.gender,
                    idUser: doc.idUser,
                    address: doc.address,
                    _id: doc._id,
                    request: {
                        type: 'GET',
                        url: "http://localhost:3000/author/" + doc._id
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

module.exports = {
    listAuthor,
}