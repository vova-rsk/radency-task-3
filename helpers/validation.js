const createError = require('http-errors');
const { MESSAGES, REQ_VALIDATION_TARGET } = require('./constants');

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
        const bodyData = Object.keys(req.body);

        if (bodyData.length === 0) { 
          throw createError(400, MESSAGES.MISSING_FIELDS);
        }
        
        validated = schema.validate(req.body);

        if (!validated.error) {
          req.body = validated.value;
        }

        break;
      default:
        throw createError(500, MESSAGES.SERVER_ERROR);
    }
    console.log(validated.error);
    if (validated.error) {
      throw createError(400, validated.error.message);
    };

    next();
  };
};

module.exports = validation;