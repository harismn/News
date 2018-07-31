const Visitor = require('../models/visitor');
const mongoose = require('mongoose');
const db = mongoose.connection

const listVisitor = (req, res) => {
    Visitor.find()
    .select('_id, user_id, gender, address')
    .exec()
    .then(docs => {
        res.status(200).json({
            count: docs.length,
            visitor: docs.map(doc => {
                return {
                    _id: doc._id,
                    user_id: doc.user_id,
                    gender: doc.gender,
                    address: doc.address,
                    request: {
                        type: 'GET',
                        url: "http://localhost:3000/user/" + doc._id
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
    listVisitor,
}