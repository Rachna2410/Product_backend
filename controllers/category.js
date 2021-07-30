var Category = require('../models/category');


exports.showCategory = function(req,res,next){
	Category.find(function(err,categories_list){
		res.json(categories_list);
	});
	
};

exports.showCategoryById = function(req,res,next){
	console.log(req.params);
	Category.findById(req.params.id,function(err,category){
		res.json(category);
	});
	
};

exports.createCategory =  (req,res,next) => {
            let categoryObj = new Category({
                name: req.body.name,
                description: req.body.description
            });
	categoryObj.save(err => err
		?res.json({status:0})
		:res.json({status: 1, data: "Category saved successfully"})
		);
};

exports.deleteCategory = function(req,res){
	Category.findByIdAndDelete(req.params.id, function(err){
		if(err) res.json(err.tostring());
		res.json({
			status:1,
			msg:"successfully deleted category with id" + req.params.id,
		})
	})
};

exports.updateCategory = function(req,res){
	let updateOb = req.body;
	console.log(updateOb);
	Category.findOneAndUpdate(req.params.id,updateOb, function(err){
		if(err) res.json(err.tostring());
		res.json({
			status:1,
			msg:"successfully edited category with id" + req.params.id,
		})
	})
};