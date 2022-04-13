const createError = require('http-errors');
const Note = require('../model/noteModel');
const { MESSAGES } = require('../utils/constants');
const createUrl = require('../utils/createUrl');
const datesTransform = require('../utils/datesTransform');

const getNote = async (urlInfo, id) => {
    const note = await Note
        .findOne({ _id: id })
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

module.exports = getNote;