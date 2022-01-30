const Joi = require('joi')

const commentValidation = (data) => {
    const schema = Joi.object({
        SID: Joi.string()
            .min(6)
            .required(),
        fid: Joi.string()
            .min(6)
            .required(),
        sy_id: Joi.number()
            .min(1)
            .required(),
        class_id: Joi.number()
            .min(1)
            .required(),
        subject_id: Joi.number()
            .min(1)
            .required(),
        comment: Joi.string()
            .min(6)
            .required(),
    })
    return schema.validate(data)
}

module.exports.commentValidation = commentValidation