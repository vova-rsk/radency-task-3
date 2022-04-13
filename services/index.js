const addNote = require('./addNoteService');
const updateNote = require('./updateNoteService');
const removeNote = require('./removeNoteService');
const getNote = require('./getNoteService');
const getNotesList = require('./getNotesListService');
const getStatistic = require('./getStatisticService');

module.exports = {
    addNote,
    updateNote,
    removeNote,
    getNote,
    getNotesList,
    getStatistic
};