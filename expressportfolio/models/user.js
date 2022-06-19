// 
//   file name: user Model
//   Student name: Damanpreet Singh
//   Student number: 301212574
//   Date : 18-06-2022  
// 
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
});
const user = mongoose.model("users", userSchema);

module.exports = user;