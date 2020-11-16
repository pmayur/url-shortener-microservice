const express       = require('express');
const helper        = require('../util/helper')
const ShortUrlModel = require('../models/ShortUrl')

const visit = express.Router();

visit.get('/:url', function(req, res) {

    let short = req.params.url;

    ShortUrlModel.ShortUrl.find( { short }, function(err, result){

        if( result.length == 0 ) {
            res.send({
                error: "No such url found"
            })
        } else {
            res.redirect( result[0].url )
        }
    })    
})

module.exports = visit;