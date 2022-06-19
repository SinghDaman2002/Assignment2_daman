// 
//   file name: Auth Controller
//   Student name: Damanpreet Singh
//   Student number: 301212574
//   Date : 18-06-2022  
// 
const userSchema=require("../models/user");
exports.login = (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    userSchema.findOne({username: username, password: password}, function(err, usersData) {
        if (err) {
            console.log(err);
        }else if(!usersData){
            res.render('../views/content_pg/login_pg.ejs', { title: 'Login',message: 'Invalid Credentials!! Please Try Again'});
        }else {
            console.log("Logged In Successfully");
            req.session.user = null;
            req.session.user = usersData;
            res.redirect("/secure/");
        }
    });
}