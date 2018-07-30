const User = require('../models/user');
const mongoose = require('mongoose');
const db = mongoose.connection

console.log('dugong jelek')
console.log(User)

const listUser = (req, res, next) => {
    User.find()
    .select("firstname lastname phone _id ")
    .exec()
    .then(docs => {
        const response = {
            count: docs.length,
            user: docs.map(doc => {
                return {
                    fisrstname: doc.fisrstname,
                    lastname: doc.lastname,
                    email: doc.email,
                    phone: doc.phone,
                    _id: doc._id,
                    request: {
                        type: 'GET',
                        url: "http://localhost:3000/user/" + doc._id
                    }
                };
            })
        }
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