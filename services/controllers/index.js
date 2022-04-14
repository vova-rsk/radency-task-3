const getNotesList = require('./getNotesListController');
const getNote = require('./getNoteController');
const addNote = require('./addNoteController');
const removeNote = require('./removeNoteController');
const updateNote = require('./updateNoteController');
const getNotesStatistic = require('./getNotesStatisticController');

module.exports = {
    getNotesList,
    getNote,
    addNote,
    removeNote,
    updateNote,
    getNotesStatistic,
};