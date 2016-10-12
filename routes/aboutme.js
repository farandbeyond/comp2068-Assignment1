/**
 * Created by Connor on 2016-10-05.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('aboutme', {
        pageNum: 2,
        title: 'About Me'
    });
});

module.exports = router;