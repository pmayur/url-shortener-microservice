const express = require('express');

var shorten = express.Router();

shorten.get('/', function(req, res) {
    res.send("Hello from route")
})

module.exports = shorten;