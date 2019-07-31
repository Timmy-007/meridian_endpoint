'use strict';
var express = require('express');
var router = express.Router();
var postVariable="Express";


/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: postVariable });
});
//router.get('/meridian/', function (req, res) {
//    postVariable = req.body; test
//    res.render('index', { title: postVariable }); test
//});
router.post('/meridian/', function (req, res) {
   
    console.log('world');
    postVariable = req.body.campaign_type + "" + req.body.device_ids;
    
    res.render('index', { title: postVariable });
});



module.exports = router;
