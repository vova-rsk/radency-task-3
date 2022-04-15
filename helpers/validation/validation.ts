import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import Joi from 'joi';
import { MESSAGES, REQ_VALIDATION_TARGET } from '../constants';

const validation = (schema:Joi.ObjectSchema, validationTarget:string) => {
  return async (req:Request, res:Response, next:NextFunction) => {
    let validated = null;

    switch (validationTarget) {
      case REQ_VALIDATION_TARGET.QUERY:
        validated = schema.validate(req.query);
        break;
      case REQ_VALIDATION_TARGET.PARAMS:
        validated = schema.validate(req.params);
        break;
      case REQ_VALIDATION_TARGET.BODY:
        if (Object.keys(req.body).length === 0) { 
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

    if (validated.error) {
      throw createError(400, validated.error.message);
    }

    next();
  };
};

export default validation;