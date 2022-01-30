const Joi = require('joi')

const teacherValidation = (data) => {
    const schema = Joi.object({
        TID: Joi.string()
            .min(6)
            .required(),
        Fname: Joi.string()
            .min(3)
            .required(),
        Lname: Joi.string()
            .min(3)
            .required(),
        Mname: Joi.string()
            .allow(''),
    })
    return schema.validate(data)
}

module.exports.teacherValidation = teacherValidation