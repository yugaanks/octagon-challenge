'use strict';
var express = require('express');
var router = express.Router();
var path = require('path');
const data = require("../data");
const userData = data.users;

/* GET home page. */
router.get('/', function (req, res) {
    res.sendFile('index.html');
});

router.get('/contact', function (req, res) {
    res.sendFile(path.resolve('public/contact.html'));
});

router.post('/contact', function (req, res) {
    let data = req.body;
    //console.log(data);
    userData.addUser(data.fname, data.lname, data.email, data.zipcode, data.state)
        .then((newUser) => {
            res.send("User added");
        }).catch((e) => {
            console.log("error:", e )
            res.status(500).json({ error: e });
        });
});

module.exports = router;
