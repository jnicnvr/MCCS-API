const Joi = require('joi')

const classlistValidation = (data) => {
    const schema = Joi.object({
        _class: Joi.string()
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

module.exports.classlistValidation = classlistValidation