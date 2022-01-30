const Joi = require('joi')

const userLogsValidation = (data) => {
    const schema = Joi.object({
        project_user: Joi.string()
            .min(3)
            .required(),
    })
    return schema.validate(data)
}

module.exports.userLogsValidation = userLogsValidation