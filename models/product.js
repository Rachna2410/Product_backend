var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	name:{type:String, required:true, maxLength:50},
	price:{type:Number,required:true, $lte:10000},
	description:{type:String,required:true, maxLenth:500},
	category:{type:mongoose.Schema.ObjectId,ref:'Category'},
	company:{type:mongoose.Schema.ObjectId,ref:'Company'}
});

module.exports = mongoose.model('Product',ProductSchema);