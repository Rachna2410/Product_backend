var createError = require('http-errors');
var express = require('express');
console.log('start nodemon again');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
const HobbiesModel = require("./models/hobby");
const salariesModel = require("./models/salaries");
const bookModel = require("./models/book");
const authorModel = require("./models/author");
const categoryModel = require("./models/category");
const userModel = require("./models/user");
const company =require("./models/company");
const productModel = require("./models/product");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var orderRouter = require('./routes/order');
var homeRouter = require('./routes/home');
var cookiesRouter = require('./routes/cookies');
var dbRouter = require("./routes/db");
var ecommerceRouter = require("./routes/ecommerce");
//var mongoClient = require("mongodb").MongoClient;
var hobbyRouter=require("./routes/hobby");
var authorRouter = require('./routes/author');
var categoryRouter = require('./routes/category');
var userRouter = require('./routes/user');
var bookRouter = require('./routes/book');
var companyRouter = require('./routes/company');
var productRouter = require('./routes/product');

var app = express();

let mongoConnUrl = "mongodb://localhost/julyexpress";
mongoose.connect(mongoConnUrl, {useNewUrlParser: true, useUnifiedTopology:true});
let db = mongoose.connection;
db.on("error", function() {
  console.log("Error came in connecting");
});

/*HobbiesModel.find(function(err, hobbies_list){
	console.log(hobbies_list);
	console.log("Again");
})

HobbiesModel.find(function(err, salaries_list){
	console.log(salaries_list);
	console.log("Again");
})*/
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/myorder', orderRouter);
app.use('/home', homeRouter);
app.use('/cookies', cookiesRouter);
app.use('/db', dbRouter);
app.use('/ecommerce', ecommerceRouter);
app.use('/hobby',hobbyRouter);
app.use('/author', authorRouter);
app.use('/category', categoryRouter);
app.use('/user', userRouter);
app.use('/book',bookRouter);
app.use('/company',companyRouter);
app.use('/product',productRouter);
//app.use('/connectdb', connectdbRouter);

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
  res.render('error');
});

module.exports = app;
