const Note = require('../model/noteModel');
const createUrl = require('../utils/createUrl');
const datesIntervalTransform = require('../utils/datesIntervalTransform');

const addNote = async (urlInfo, noteData) => { 
    const { name, category, content } = noteData;

    const result = await Note.create({ name, category, content });

    const addedNote = {
        id: result._id,
        name:result.name,
        created: result.createdAt,
        category:result.category,
        content:result.content,
        dates:datesIntervalTransform(result.dates),
        iconUrl: createUrl(urlInfo, result.icon) 
    }

    return addedNote;
};

module.exports = addNote;