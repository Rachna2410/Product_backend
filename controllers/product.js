var Product = require("../models/product");

exports.showProduct = function(req,res){
	Product.find(function(err,products_list){
		res.json(products_list);
	});
	
};

exports.createProduct = function(req,res,next){
	if(!req.body.category instanceof Array) {
		if(typeof req.body.category === undefined){
			req.body.category=[];
		} else {
			req.body.category = new Array(req.body.category);
		}
	}
	var productOb = new Product({
		name:req.body.name,
		price:req.body.price,
		description:req.body.description,
		category:req.body.category,
		company:req.body.company,
	});
	productOb.save(function(err){
		if(err){
			res.json({status:0, debug_data:err});
		} else {
			res.json({status:1,data:"Product saved Successfully"});
		}
	});
};