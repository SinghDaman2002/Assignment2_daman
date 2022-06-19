// 
//   file name: Auth Route
//   Student name: Damanpreet Singh
//   Student number: 301212574
//   Date : 18-06-2022  
// 
var express = require('express');

var router = express.Router();
const authController=require('../controllers/auth.controller')
/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('../views/content_pg/login_pg.ejs', { title: 'Login'});
});
router.get('/logout', function(req, res, next) {
  req.session.user = undefined;
  res.redirect("/auth/login");
});
router.post('/login', authController.login);

module.exports = router;

