const Joi = require("joi");

const createUserSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().optional(),
  password: Joi.string().min(6).required(),
  role: Joi.string()
    .valid("customer", "driver", "restaurant_admin", "super_admin")
    .optional(),
});

const updateUserSchema = Joi.object({
  name: Joi.string().min(3),
  email: Joi.string().email(),
  phone: Joi.string(),
  password: Joi.string().min(6),
  isActive: Joi.boolean(),
});

const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    phoneNumber: Joi.string().optional(),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

module.exports = { 
  createUserSchema, 
  updateUserSchema, 
  registerValidation,  
  loginValidation      
};