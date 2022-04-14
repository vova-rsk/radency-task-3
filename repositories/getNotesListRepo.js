const Note = require('../model');
const createUrl = require('../helpers/createUrl');
const datesTransform = require('../helpers/datesTransform');

const getNotesList = async (urlInfo) => {
    const notesList = await Note
        .find()
        .select({ updatedAt: 0 });

    const updatedNotesList = notesList.map(note => { 
        return {
            id: note._id,
            name:note.name,
            created: datesTransform(note.createdAt),
            category:note.category,
            content:note.content,
            dates:datesTransform(note.dates),
            iconUrl: createUrl(urlInfo, note.icon) 
        };
    });

    return updatedNotesList;
};

module.exports = getNotesList;