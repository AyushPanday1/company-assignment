const mongoose= require('mongoose')

const custSchema = new mongoose.Schema({

    firstName :String,
    lastName :String,
    mobileNumber :String,           
    DOB :Date,
    emailID :String,              
    address :String,
    customerID :String ,           
    status :String,               
    isDeleted:{type:Boolean, default:false}

},{timestamps:true})

module.exports=mongoose.model('Customer',custSchema)