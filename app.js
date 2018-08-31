var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var welcomeRouter = require('./routes/welcome');
var homeRouter = require('./routes/home');
var app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require ('cors');

// mongodb connection
mongoose.connect("mongodb://localhost:27017/whoseTheGoat");
const db = mongoose.connection;

// mongo console.error
db.on('error', console.error.bind(console, 'connection err:'))


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// enable cors
app.use(cors());

// app.use('/', indexRouter);
app.use('/', welcomeRouter);
app.use('/home', homeRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(new Error(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.redirect('/')

  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;
