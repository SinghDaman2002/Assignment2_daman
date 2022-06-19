// 
//   file name: Contact Model
//   Student name: Damanpreet Singh
//   Student number: 301212574
//   Date : 18-06-2022  
// 
const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    number: {
        type: String,
    },
    email: {
        type: String,
    },
});
const contact = mongoose.model("contacts", contactSchema);

module.exports = contact;