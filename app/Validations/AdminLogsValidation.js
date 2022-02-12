const Joi = require('joi')

const adminLogsValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string()
            .min(6)
            .required(),
        activity: Joi.string()
            .min(3)
            .required(),
        user_level: Joi.string()
            .min(3)
            .required(),
    })
    return schema.validate(data)
}

module.exports.adminLogsValidation = adminLogsValidation