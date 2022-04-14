const createError = require('http-errors');
const Note = require('../model');
const { MESSAGES } = require('../helpers/constants');
const createUrl = require('../helpers/createUrl');
const datesTransform = require('../helpers/datesTransform');

const updateNote = async (urlInfo, id, noteData) => {
    const note = await Note
        .findOneAndUpdate({ _id: id }, noteData, { new: true })
        .select({ updatedAt: 0 });
    
    if (!note) { 
        throw createError(404, MESSAGES.NOT_FOUND);
    }
    
    const updatedNote = {
        id: note._id,
        name:note.name,
        created: datesTransform(note.createdAt),
        category:note.category,
        content:note.content,
        dates:datesTransform(note.dates),
        iconUrl: createUrl(urlInfo, note.icon) 
    }

    return updatedNote;
};

module.exports = updateNote;