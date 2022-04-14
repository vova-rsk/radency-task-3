const Joi = require('joi');
const { MESSAGES } = require('../constants');

const noteIdSchema = Joi.object({
    id: Joi.string()
        .trim()
        .pattern(/^[a-f0-9]{24}$/)
        .messages({
            'string.base': MESSAGES.BAD_REQUEST,
            'string.pattern.base': MESSAGES.BAD_REQUEST
        }),
});

module.exports = noteIdSchema;