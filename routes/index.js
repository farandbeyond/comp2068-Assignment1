var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    pageNum: 1,
    title: 'Homepage'
  });
});
/* about me page*/
router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', {
    pageNum: 2,
    title: 'About Me'
  });
});

/* projects page*/
router.get('/projects', function(req, res, next) {
  var projNames = ['Blackwind 1.0','Blackwind 2.0','Blackwind 3.0','Gunblade'];
  var projDescription = ['A turn based RPG','Remake of Blackwind 1.0','Remake of Blackwind 2.0','A grid based puzzle game'];
  var projSolo = ['Self, and 1 other','Mostly solo','Self, and 1 other','Solo'];
  var projInProgress = ['Ended at demo','Ended at demo','In progress; On Hold','In progress'];
  var projLang = ['Java','Java','Java','Java'];


  res.render('projects', {
    pageNum: 3,
    title: 'My Projects',
    projects: [projNames,projDescription,projSolo,projInProgress,projLang]
  });
});

/* services page*/
router.get('/services', function(req,res,next){
  res.render('services',{
    pageNum: 4,
    title: 'Services'
  });
});


/* contact form page*/
router.get('/contact', function(req,res,next){
  res.render('contact', {
    pageNum: 5,
    title: 'Contact Me'
  });
});
module.exports = router;
