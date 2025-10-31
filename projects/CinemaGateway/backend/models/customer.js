const mongooose = require('mongoose');

const Joi = require("joi");

const customerSchema = new mongooose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    isGold:{
        type: Boolean,
        default: false,

    },
    phone:{
        type: String,
        required: true,
        minlength: 10,
        maxlength: 12
    }
})

const Customer = mongooose.model("Customer", customerSchema);


function validateCustomer(customer){
    const schema = Joi.object({
        name:Joi.string().min(5).max(50).required(),
        isGold:Joi.boolean(),
        phone:Joi.string().min(10).max(12).required()
    });
    return schema.validate(customer);
}


exports.Customer = Customer;

exports.validateCustomer = validateCustomer;