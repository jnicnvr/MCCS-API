const Joi = require('joi')

const notificationValidation = (data) => {
    const schema = Joi.object({
        SID: Joi.string()
            .min(6)
            .required(),
        fid: Joi.string()
            .min(6)
            .required(),
        sy_id: Joi.string()
            .min(1)
            .required(),
        class_id: Joi.string()
            .min(1)
            .required(),
        subject_id: Joi.string()
            .min(1)
            .required(),
    })
    return schema.validate(data)
}

module.exports.notificationValidation = notificationValidation