const Joi = require('joi')

const ratingValidation = (data) => {
    const schema = Joi.object({
        code: Joi.string()
            .min(2)
            .required(),
        description: Joi.string()
            .min(6)
            .required(),
        SID: Joi.string()
            .min(6)
            .required(),
        fid: Joi.string()
            .min(5)
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
        rating1: Joi.number()
            .min(1)
            .required(),
        rating2: Joi.number()
            .min(1)
            .required(),
        rating3: Joi.number()
            .min(1)
            .required(),
        rating4: Joi.number()
            .min(1)
            .required(),
        rating5: Joi.number()
            .min(1)
            .required(),
        rating6: Joi.number()
            .min(1)
            .required(),
        rating7: Joi.number()
            .min(1)
            .required(),
        rating8: Joi.number()
            .min(1)
            .required(),
        rating9: Joi.number()
            .min(1)
            .required(),
        rating10: Joi.number()
            .min(1)
            .required(),

    })
    return schema.validate(data)
}

module.exports.ratingValidation = ratingValidation