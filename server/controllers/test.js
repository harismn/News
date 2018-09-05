const Test = require('../models/test');
const mongoose = require('mongoose');
const formidable = require('formidable');
const fs = require('fs');
const db = mongoose.connection
const request = require('request')


//create article
const test = (req, res, next) => {
    let url = "http://localhost:3000/article"
    request(url,(req, (err, fields) => {
        if (err) {
            return res.status(400).json({
                error: "error"
            
            })
        }
        var objTest = JSON.parse(fields.body); 
        console.log(objTest)
        let test = new Test(objTest)
        //console.log(fields.body)
        test
            .save()
            .then(result => {
                //console.log(result.body);
                //res.status(201).json({
                res.send(result)
                //});
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