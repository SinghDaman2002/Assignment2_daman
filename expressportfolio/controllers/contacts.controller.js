// 
//   file name: Contact Controller
//   Student name: Damanpreet Singh
//   Student number: 301212574
//   Date : 18-06-2022  
// 
const contactSchema=require("../models/contact");
exports.fetchAllContacs=(req, res) => {    
    contactSchema.find({},null,{sort: {name: 1}}, function(err, contactData) {
        if (err) {
            console.log(err);
        }else {
            res.render('../views/content_pg/contacts_pg.ejs', { title: 'My Business Contacts',contacts: contactData });
        }
    });
};
exports.deleteContact=(req, res) => {    
    const id = req.params.id;
    contactSchema.deleteOne({ _id: { $eq: id } }, function(err, contactData) {
        if (err) {
            console.log(err);
        }else {
            res.redirect("/secure/");
        }
    });
};
exports.findContactByID=(req, res) => {    
    const id = req.params.id;
    contactSchema.findById(id, function(err, contactData) {
        if (err) {
            console.log(err);
        }else {
            res.render('../views/content_pg/edit_pg.ejs', { title: 'Edit Business Contact',contact: contactData });
        }
    });
};
exports.editContact=(req, res) => {    
    const id = req.body.id;
    const user={"name":req.body.name,"number":req.body.number, "email":req.body.email};
    contactSchema.findByIdAndUpdate(id, user, function(err, contactData) {
        if (err) {
            console.log(err);
        }else {
            res.render('../views/content_pg/edit_pg.ejs', { title: 'Edit Business Contact',contact: user ,message:"Contact Updated Successfully"});
        }
    });
};