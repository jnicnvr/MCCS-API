const Joi = require('joi')

const evaluationRestrictionValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string()
            .min(6)
            .required(),
        _class: Joi.string()
            .min(6)
            .required(),
        code: Joi.string()
            .min(2)
            .required(),
        year: Joi.string()
            .min(9)
            .required(),
        semester: Joi.number()
            .min(1)
            .required(),
    })
    return schema.validate(data)
}

module.exports.evaluationRestrictionValidation = evaluationRestrictionValidation