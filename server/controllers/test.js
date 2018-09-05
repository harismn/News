const Test = require('../models/test');
const mongoose = require('mongoose');
const formidable = require('formidable');
const fs = require('fs');
const db = mongoose.connection
const request = require('request')


//create article
const test = (req, res, next) => {
    let url = "http://localhost:3000/article"
    request(url, (req, (err, fields) => {
        if (err) {
            return res.status(400).json({
                error: "error"

            })
        }
        
        var objTest = JSON.parse(fields.body);
    
        for(var i; i > objTest.length; i++) {
            return objTest[i]
            console.log[i]    
            }
        let data = new Test(objTest.user[i])
        // console.log("ini",data)
        data
            .save()
            .then(result => {
                res.send(result)

            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    }))
}

module.exports = {
    test,
}