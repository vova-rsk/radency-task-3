const Joi = require('joi');
const { MESSAGES, CATEGORIES, STATUS } = require('../../constants');

const updateNoteReqDataSchema = Joi.object()
    .keys({
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
                'any.only': MESSAGES.INVALID_CATEGORY_VALUE
            }),
        content: Joi.string()
            .trim()
            .min(2)
            .messages({
                'string.base': MESSAGES.INVALID_CONTENT_VALUE,
                'string.min': MESSAGES.INVALID_CONTENT_LENGTH   
            }),
        status: Joi.string()
            .trim()
            .valid(...Object.values(STATUS))
            .messages({
                'string.base': MESSAGES.INVALID_STATUS_VALUE,
                'any.only': MESSAGES.INVALID_STATUS_VALUE
            })
    })
    .messages({
        'object.unknown': MESSAGES.BAD_REQUEST
    });

module.exports = updateNoteReqDataSchema;