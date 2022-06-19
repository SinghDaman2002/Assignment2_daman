//installed 3rd party packages
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
const mongoose = require("mongoose");
let indexRouter = require('./routes/index');
let authRouter = require('./routes/auth');
let contactRouter = require('./routes/contacts');
const sessions = require("express-session");
const config = require('./config/config');
let app = express();
app.use(
  sessions({
      secret: "^*(^*&%^&#()@*#()*@()#*@&$)@#)_$()_@",
      saveUninitialized: true,
      cookie: { maxAge: 1000 * 60 * 60 * 24 },
      resave: false,
  })
);
app.use(function(req, res, next) {
  res.locals.user = req.session.user;
  next();
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // express -e 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use('/', indexRouter);
app.use('/auth', authRouter);
// app port
mongoose.connect(config.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function() {
  console.log("Connected successfully");
});

////////////////////////////////////////////////////////////////
// Authnetication for secured pages Starts
////////////////////////////////////////////////////////////////
//checkIfUserLoggedIn
function checkIfUserLoggedIn(req, res, next) {
  if (req.session.user) {
      next();
  } else {
      res.redirect("/auth/login");
  }
}

app.all("/secure/*", checkIfUserLoggedIn, function(req, res, next) {
  next();
});
app.use("/secure/", contactRouter);
////////////////////////////////////////////////////////////////
// Authnetication for secured pages ends
////////////////////////////////////////////////////////////////



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {title: 'Error'});
});

module.exports = app;
