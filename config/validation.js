const Joi = require('joi')

const registerValidation = (data) => {
    const schema = Joi.object({
        SID: Joi.string()
            .min(6)
            .required(),
        Fname: Joi.string()
            .min(2)
            .required(),
        Lname: Joi.string()
            .min(2)
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
const login_adminValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string()
            .min(3)
            .required(),
        password: Joi.string()
            .min(3)
            .required(),
    })
    return schema.validate(data)
}

const register_adminValidation = (data) => {
    const schema = Joi.object({
        admin_id: Joi.string()
            .min(6)
            .required(),
        Fname: Joi.string()
            .min(2)
            .required(),
        Lname: Joi.string()
            .min(2)
            .required(),
        position: Joi.string()
            .min(3)
            .required(),
        username: Joi.string()
            .min(3)
            .required(),
        password: Joi.string()
            .min(3)
            .required(),
    })
    return schema.validate(data)
}

module.exports.login_adminValidation = login_adminValidation;
module.exports.register_adminValidation = register_adminValidation;
module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation