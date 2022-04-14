const Joi = require('joi');
const { MESSAGES, CATEGORIES } = require('../constants');

const addNoteReqDataSchema = Joi.object()
    .keys({
    name: Joi.string()
        .required()
        .trim()
        .min(2)
        .messages({
            'string.base': MESSAGES.INVALID_NAME_VALUE,
            'any.required': MESSAGES.MISSING_NAME,
            'string.min': MESSAGES.INVALID_NAME_LENGTH           
        }),
    category: Joi.string()
        .required()
        .trim()
        .valid(...Object.values(CATEGORIES))
        .messages({
            'string.base': MESSAGES.INVALID_CATEGORY_VALUE,
            'any.required': MESSAGES.MISSING_CATEGORY,
            'any.only': MESSAGES.INVALID_CATEGORY_VALUE
        }),
    content: Joi.string()
        .required()
        .trim()
        .min(2)
        .messages({
            'string.base': MESSAGES.INVALID_CONTENT_VALUE,
            'any.required': MESSAGES.MISSING_CONTENT,
            'string.min': MESSAGES.INVALID_CONTENT_LENGTH   
        })
    })
    .length(3)
    .messages({
        'object.unknown': MESSAGES.BAD_REQUEST,
    });

module.exports = addNoteReqDataSchema;