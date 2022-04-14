const validation = require('../../helpers/validation');
const { REQ_VALIDATION_TARGET } = require('../../helpers/constants');
const {
    addNoteDataSchema,
    noteIdSchema,
    updateNoteReqDataSchema
} = require('../../helpers/validationSchemas');


const addNoteBodyValidation = validation(
    addNoteDataSchema, REQ_VALIDATION_TARGET.BODY
);
const paramsValidation = validation(
    noteIdSchema, REQ_VALIDATION_TARGET.PARAMS
);
const updateNoteBodyValidation = validation(
    updateNoteReqDataSchema, REQ_VALIDATION_TARGET.BODY
);

module.exports = {
    addNoteBodyValidation,
    updateNoteBodyValidation,
    paramsValidation
};