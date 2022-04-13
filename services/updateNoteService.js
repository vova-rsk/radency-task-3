const createError = require('http-errors');
const Note = require('../model/noteModel');
const { MESSAGES } = require('../utils/constants');
const createUrl = require('../utils/createUrl');
const datesIntervalTransform = require('../utils/datesIntervalTransform');

const updateNote = async (urlInfo, id, noteData) => {
    const result = await Note
        .findOneAndUpdate({ _id: id }, noteData, { new: true })
        .select({ updatedAt: 0 });
    
    if (!result) { 
        throw createError(404, MESSAGES.NOT_FOUND);
    }
    
    const updatedNote = {
        id: result._id,
        name:result.name,
        created: result.createdAt,
        category:result.category,
        content:result.content,
        dates:datesIntervalTransform(result.dates),
        iconUrl: createUrl(urlInfo, result.icon) 
    }

    return updatedNote;
};

module.exports = updateNote;