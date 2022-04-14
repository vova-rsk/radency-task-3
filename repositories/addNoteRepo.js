const Note = require('../model');
const createUrl = require('../helpers/createUrl');
const datesTransform = require('../helpers/datesTransform');

const addNote = async (urlInfo, noteData) => { 
    const { name, category, content } = noteData;

    const note = await Note.create({ name, category, content });

    const addedNote = {
        id: note._id,
        name:note.name,
        created: datesTransform(note.createdAt),
        category:note.category,
        content:note.content,
        dates:datesTransform(note.dates),
        iconUrl: createUrl(urlInfo, note.icon),
        status:note.status
    }

    return addedNote;
};

module.exports = addNote;