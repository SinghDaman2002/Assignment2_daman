
var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});



/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index.ejs', { title: 'Home'});
});


/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('../views/content_pg/about_page.ejs', { title: 'About'});
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('../views/content_pg/project_pg.ejs', { title: 'Projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('../views/content_pg/services_pg.ejs', { title: 'Services'});
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('../views/content_pg/contact_pg.ejs', { title: 'Contact'});
});

module.exports = router;
