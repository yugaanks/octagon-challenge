'use strict';
var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function (req, res) {
    res.sendFile('index.html');
});

router.get('/contact', function (req, res) {
    res.sendFile(path.resolve('public/contact.html'));
});

router.post('/contact', function (req, res) {
    var body = req.body;
});

module.exports = router;
