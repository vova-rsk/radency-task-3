const addNote = require('./addNoteRepo');
const updateNote = require('./updateNoteRepo');
const removeNote = require('./removeNoteRepo');
const getNote = require('./getNoteRepo');
const getNotesList = require('./getNotesListRepo');
const getStatistic = require('./getStatisticRepo');

module.exports = {
    addNote,
    updateNote,
    removeNote,
    getNote,
    getNotesList,
    getStatistic
};