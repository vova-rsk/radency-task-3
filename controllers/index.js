const getNotesListController = require('./notes/getNotesListController');
const getNoteController = require('./notes/getNoteController');
const addNoteController = require('./notes/addNoteController');
const removeNoteController = require('./notes/removeNoteController');
const updateNoteController = require('./notes/updateNoteController');
const getNotesStatistics = require('./notes/getNotesStatistics');

module.exports = {
    getNotesListController,
    getNoteController,
    addNoteController,
    removeNoteController,
    updateNoteController,
    getNotesStatistics,
};