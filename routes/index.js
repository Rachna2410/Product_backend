var express = require("express");
var router = express.Router();
var createError = require('http-errors')

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

// router.get("/contact", function(req, res, next){
// 	return next(createError(401, 'Please login to view this page.'))
// 	next();
// 	res.send("Welcome to contact us page");
// 	//res.send(""Welcome to contact us page");

// });

// router.get("/:name", function(req, res, next){
// 	if(req.params.name == "sumit"){
// 		return next(createError(404, 'dont just give first name'));
// 		next();
// 	}
// 	/*res.send("Welcome to contact us page");*/
// 	res.send(`the Param is ${req.params.name}`);
// });

// router.get("/contact", function(req, res, next){
// 	res.send("Welcome to contact us page");
// });

// router.get("/testform", function(req,res,next){
// 	res.send(`
// 		<form method = "post" action = "/result">
// 		<input type="text" name = "name" />
// 		<button>Register</button>
// 		</form> `);
// });
// router.get("/result",function(req,res){
// 	console.log(req.body);
// 	res.send(req.body.name);
// });
module.exports = router;
