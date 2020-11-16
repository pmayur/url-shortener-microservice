const express       = require('express');
const helper        = require('../util/helper')
const ShortUrlModel = require('../models/ShortUrl')

const shorten = express.Router();

shorten.post('/', function(req, res) {
    const url = req.body.url;
    const newId = helper.makeId();

    let newUrl = {
        url: url,
        short: newId
    }

    ShortUrlModel.ShortUrl.create(newUrl, function(err, result) {
        if (err) {
            res.send({
                error: err.name,
                errorCode: err.code
            })
        }    
        else res.send({
            url: result.url,
            short: result.short
        })
    })
})

module.exports = shorten;