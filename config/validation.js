const Joi = require('joi')

const registerValidation = (data) => {
    const schema = Joi.object({
        SID: Joi.string()
            .min(6)
            .required(),
        Fname: Joi.string()
            .min(6)
            .required(),
        Lname: Joi.string()
            .min(6)
            .required(),
        Age: Joi.number()
            .min(2)
            .required(),
        Sex: Joi.string()
            .min(1)
            .required(),
        username: Joi.string()
            .min(6)
            .required(),
        password: Joi.string()
            .min(6)
            .required(),
        curriculum: Joi.string()
            .min(4)
            .required(),
        year_level: Joi.number()
            .min(1)
            .required(),
        section: Joi.string()
            .min(1)
            .required(),
    })
    return schema.validate(data)
}

const loginValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string()
            .min(6)
            .required(),
        password: Joi.string()
            .min(6)
            .required(),
    })
    return schema.validate(data)
}

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation