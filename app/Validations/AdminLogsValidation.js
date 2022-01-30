const Joi = require('joi')

const adminLogsValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string()
            .min(6)
            .required(),
        password: Joi.string()
            .min(6)
            .required(),
    })
    return schema.validate(data)
}

module.exports.adminLogsValidation = adminLogsValidation