import Joi from 'joi';
import { MESSAGES } from '../../constants';

const noteIdSchema = Joi.object({
    id: Joi.string()
        .trim()
        .pattern(/^[a-f0-9]{24}$/)
        .messages({
            'string.base': MESSAGES.BAD_REQUEST,
            'string.pattern.base': MESSAGES.BAD_REQUEST
        }),
});

export default noteIdSchema;