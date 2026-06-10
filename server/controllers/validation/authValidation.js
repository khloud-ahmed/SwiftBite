const joi = require("joi");


const registerValidation = (data) => {
  const schema = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).required(), 
    role: joi.string().valid("customer", "restaurant_admin", "driver", "super_admin").default("customer"),
   
  
  });

  return schema.validate(data);
};


const loginValidation = (data) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
  });

  return schema.validate(data);
};

module.exports = { registerValidation, loginValidation };