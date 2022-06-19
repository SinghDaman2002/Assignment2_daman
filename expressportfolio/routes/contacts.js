// 
//   file name: Contact Router
//   Student name: Damanpreet Singh
//   Student number: 301212574
//   Date : 18-06-2022  
// 
var express = require('express');

var router = express.Router();
const contactControler = require('../controllers/contacts.controller');
/* GET users listing. */
router.get('/', contactControler.fetchAllContacs);
router.get('/contact/delete/:id', contactControler.deleteContact);
router.get('/contact/edit/:id', contactControler.findContactByID);
router.post('/contact/edit', contactControler.editContact);
module.exports = router;