import Joi from "@hapi/joi";

export const signupSchema = Joi.object({
  email: Joi.string().email().min(8).max(250).lowercase().trim().required(),
  fullName: Joi.string().min(3).max(125).trim().required(),
  username: Joi.string().min(5).max(100).trim().lowercase().required(),
  // Password max is based on the bcrypt hashing max length
  password: Joi.string()
    .min(8)
    .max(72, "utf-8")
    .regex(/^(?=.*?[\p{Lu}])(?=.*?[\p{Ll}])(?=.*?\d).*$/u)
    .message(
      "{#label} must contain one uppercase, one lowercase, and one digit."
    )
    .required(),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().min(8).max(250).lowercase().trim().required(),
  password: Joi.string()
    .min(8)
    .max(72, "utf-8")
    .regex(/^(?=.*?[\p{Lu}])(?=.*?[\p{Ll}])(?=.*?\d).*$/u)
    .message(
      "{#label} must contain one uppercase, one lowercase, and one digit."
    )
    .required(),
});
