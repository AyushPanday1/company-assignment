const mongoose=require('mongoose')


const isValidEmail = function (value) {
    let emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
    if (emailRegex.test(value)) return true;
  }


const isValidMobile = function (mobile) {
    if (/^[0]?[6789]\d{9}$/.test(mobile)){
       return true
    }
   }
   

const isValidString = function (value) {
  if (typeof value === "undefined" || value === null) return false;
  if (typeof value === "string" && value.trim().length === 0) return false;
  return true;
};

const isValidName = function (name) {
  if (/^[a-zA-Z ]+$/.test(name)) {
    return true;
  }
};


const isIdValid = function (value) {
    return mongoose.Types.ObjectId.isValid(value); 
  }


function isValidDate (date){
    return /^([0-9]{4}[-][0-9]{2}[-][0-9]{2})$/.test(date)
 }
module.exports={isValidEmail,isValidMobile,isValidString,isValidName,isIdValid,isValidDate}