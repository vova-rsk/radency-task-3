const {validation, schemas} = require('../../helpers/validation');
const { REQ_VALIDATION_TARGET } = require('../../helpers/constants');

const addNoteBodyValidation = validation(
    schemas.addNoteDataSchema, REQ_VALIDATION_TARGET.BODY
);
const paramsValidation = validation(
    schemas.noteIdSchema, REQ_VALIDATION_TARGET.PARAMS
);
const updateNoteBodyValidation = validation(
    schemas.updateNoteReqDataSchema, REQ_VALIDATION_TARGET.BODY
);

module.exports = {
    addNoteBodyValidation,
    updateNoteBodyValidation,
    paramsValidation
};