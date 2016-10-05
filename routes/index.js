var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    pageNum: 1,
    title: 'Homepage'
  });
});

module.exports = router;
