const validation = require('./validation');
const addNoteDataSchema = require('./schemas/addNoteDataSchema');
const updateNoteReqDataSchema = require('./schemas/updateNoteDataSchema');
const noteIdSchema = require('./schemas/noteIdSchema');

module.exports = {
    validation,
    schemas: {
        addNoteDataSchema,
        noteIdSchema,
        updateNoteReqDataSchema
    }
};