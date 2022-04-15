import {default as validation, schemas} from '../../helpers/validation';
import { REQ_VALIDATION_TARGET } from '../../helpers/constants';

export const addNoteBodyValidation = validation(
    schemas.addNoteDataSchema, REQ_VALIDATION_TARGET.BODY
);

export const paramsValidation = validation(
    schemas.noteIdSchema, REQ_VALIDATION_TARGET.PARAMS
);

export const updateNoteBodyValidation = validation(
    schemas.updateNoteReqDataSchema, REQ_VALIDATION_TARGET.BODY
);
