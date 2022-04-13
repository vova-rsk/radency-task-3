const Joi = require('joi');
const { MESSAGES } = require('../constants');

const noteIdSchema = Joi.object({
    id: Joi.string()
        .trim()
        .pattern(/^[a-f0-9]{24}$/)
        .messages({
            'string.base': MESSAGES.NOT_FOUND,
            'string.pattern.base': MESSAGES.NOT_FOUND
        }),
});

module.exports = noteIdSchema;