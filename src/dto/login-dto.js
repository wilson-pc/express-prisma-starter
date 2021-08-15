import Joi from 'joi';

export const loginDto = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
