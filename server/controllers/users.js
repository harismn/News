const User = require('../models/user');
const mongoose = require('mongoose');
const db = mongoose.connection


const listUser = (req, res) => {
    User.find()
    .select("firstname email lastname phone _id ")
    .exec()
    .then(docs => {
        res.status(200).json({
            count: docs.length,
            user: docs.map(doc => {
                return {
                    firstname: doc.firstname,
                    lastname: doc.lastname,
                    email: doc.email,
                    phone: doc.phone,
                    _id: doc._id,
                    request: {
                        type: 'GET',
                        url: `http://localhost:3000/user/${doc._id}`
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
    listUser,
}