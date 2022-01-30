const Joi = require('joi')

const schoolYearValidation = (data) => {
    const schema = Joi.object({
        year: Joi.string()
            .min(9)
            .required(),
        semester: Joi.string()
            .min(1)
            .required(),
        status: Joi.string()
            .min(6)
            .required(),
        isActive: Joi.string()
            .min(2)
            .required(),

    })
    return schema.validate(data)
}

module.exports.schoolYearValidation = schoolYearValidation