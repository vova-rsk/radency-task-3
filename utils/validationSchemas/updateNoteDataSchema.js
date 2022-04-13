const Joi = require('joi');
const { MESSAGES, CATEGORIES } = require('../constants');

const updateNoteReqDataSchema = Joi.object({
    name: Joi.string()
        .trim()
        .min(2)
        .messages({
            'string.base': MESSAGES.INVALID_NAME_VALUE,
            'any.required': MESSAGES.MISSING_NAME,
            'string.min': MESSAGES.INVALID_NAME_LENGTH           
        }),
    category: Joi.string()
        .trim()
        .valid(...Object.values(CATEGORIES))
        .messages({
            'string.base': MESSAGES.INVALID_CATEGORY_VALUE,
            'any.required': MESSAGES.MISSING_CATEGORY,
            'any.only': MESSAGES.INVALID_CATEGORY_VALUE
        }),
    content: Joi.string()
        .trim()
        .min(2)
        .messages({
            'string.base': MESSAGES.INVALID_CONTENT_VALUE,
            'any.required': MESSAGES.MISSING_CONTENT,
            'string.min': MESSAGES.INVALID_CONTENT_LENGTH   
        })
})
    .or('name', 'category', 'content')
    .messages({'object.missing':'KOKOKO'});

module.exports = updateNoteReqDataSchema;