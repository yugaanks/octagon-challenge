'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.sendFile('contact.html');
});

router.post('/', function (req, res) {
    var body = req.body;
});
module.exports = router;
