const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CompanySchema = new Schema({
    name: { type:String, required:true, maxLength: 50},
    location: { type:String, required: true, maxLength:100},
    address:{type:String, required:true,maxLength:100},
    contactno:{type:Number, required:true}
})

module.exports = mongoose.model('Company',CompanySchema);
