var company = require('../models/company');


exports.showCompany = function(req,res,next){
	company.find(function(err,company_list){
		res.json(company_list);
	});
	
};

exports.showCompanyById = function(req,res,next){
	console.log(req.params);
	company.findById(req.params.id,function(err,company){
		res.json(company);
	});
	
};

exports.createCompany =  (req,res,next) => {
            let companyObj = new company({
                name: req.body.name,
                location: req.body.location,
                address:req.body.address,
                contactno:req.body.contactno
            });
	companyObj.save(err => err
		?res.json({status:0})
		:res.json({status: 1, data: "company saved successfully"})
		);
};

exports.deleteCompany = function(req,res){
	company.findByIdAndDelete(req.params.id, function(err){
		if(err) res.json(err.tostring());
		res.json({
			status:1,
			msg:"successfully deleted company with id" + req.params.id,
		})
	})
};

exports.updateCompany = function(req,res){
	let updateOb = req.body;
	console.log(updateOb);
	company.findOneAndUpdate(req.params.id,updateOb, function(err){
		if(err) res.json(err.tostring());
		res.json({
			status:1,
			msg:"successfully edited company with id" + req.params.id,
		})
	})
};