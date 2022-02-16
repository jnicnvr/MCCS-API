const Joi = require('joi')

const feedbackValidation = (data) => {
    const schema = Joi.object({
        type: Joi.string()
            .min(5)
            .required(),
        feedback: Joi.string().allow(null),
    })
    return schema.validate(data)
}

module.exports.feedbackValidation = feedbackValidation