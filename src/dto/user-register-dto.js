import Joi from 'joi';

export const userRegisterDto = Joi.object().keys({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(4).required(),
});
