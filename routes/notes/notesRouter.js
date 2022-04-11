const express = require('express');
const ctrl = require('../../controllers');
const wrapper = require('../../utils/wrapper'); 

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/stats', wrapper(ctrl.getNotesStatistics));
router.get('/', wrapper(ctrl.getNotesListController));
router.post('/', wrapper(ctrl.addNoteController));
router.get('/:id',wrapper(ctrl.getNoteController));
router.delete('/:id', wrapper(ctrl.removeNoteController));
router.patch('/:id', wrapper(ctrl.updateNoteController));


module.exports = router;