const createError = require('http-errors');
const Note = require('../model');
const { MESSAGES } = require('../helpers/constants');

const removeNote = async (id) => {
    const result = await Note.findOneAndRemove({ _id: id });
    
    if (!result) { 
        throw createError(404, MESSAGES.NOT_FOUND);
    }
};

module.exports = removeNote;