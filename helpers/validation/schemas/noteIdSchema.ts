import Joi from 'joi';
import { MESSAGES } from '../../constants';

const noteIdSchema = Joi.object({
    id: Joi.number()
        .messages({
            'number.base': MESSAGES.BAD_REQUEST,
        }),
});

export default noteIdSchema;