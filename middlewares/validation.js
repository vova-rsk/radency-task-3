const createError = require('http-errors');
const { MESSAGES, REQ_VALIDATION_TARGET } = require('../utils/constants');

const validation = (schema, validationTarget) => {
  return async (req, res, next) => {
    let validated = null;

    switch (validationTarget) {
      case REQ_VALIDATION_TARGET.QUERY:
        validated = schema.validate(req.query);
        break;
      case REQ_VALIDATION_TARGET.PARAMS:
        validated = schema.validate(req.params);
        break;
      case REQ_VALIDATION_TARGET.BODY:
        validated = schema.validate(req.body);

        if (!validated.error) {
          req.body = validated.value;
        }

        break;
      default:
        throw createError(500, MESSAGES.SERVER_ERROR);
    }

    if (validated.error) {
      const message = validated.error.message;
      let code = 400;

      if (message === MESSAGES.NOT_FOUND) { 
        code = 404;
      }

      throw createError(code, message);
    };

    next();
  };
};

module.exports = validation;