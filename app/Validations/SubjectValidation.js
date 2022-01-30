const Joi = require('joi')

const subjectValidation = (data) => {
    const schema = Joi.object({
        code: Joi.string()
            .min(2)
            .required(),
        subject: Joi.string()
            .min(6)
            .required(),
        description: Joi.string()
            .min(6)
            .required(),
    })
    return schema.validate(data)
}

module.exports.subjectValidation = subjectValidation