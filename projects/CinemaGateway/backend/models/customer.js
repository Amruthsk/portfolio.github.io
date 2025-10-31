const mongoose = require('mongoose');

const Joi = require("joi");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },

  subscription: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subscription",
    default: null,
  },
  phone: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 12,
  },
});

const Customer = mongoose.model("Customer", customerSchema);


function validateCustomer(customer){
    const schema = Joi.object({
        name:Joi.string().min(5).max(50).required(),
        phone:Joi.string().min(10).max(12).required(),
        
    });
    return schema.validate(customer);
}


exports.Customer = Customer;

exports.validateCustomer = validateCustomer;