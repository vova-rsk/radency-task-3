const express = require('express');
const ctrl = require('../../controllers');
const validation = require('../../middlewares/validation');
const wrapper = require('../../utils/wrapper');
const { noteDataSchema } = require('../../utils/validationSchemas');
const { REQ_VALIDATION_TARGET } = require('../../utils/constants');

// eslint-disable-next-line new-cap
const router = express.Router();
const validationMiddleware = validation(noteDataSchema, REQ_VALIDATION_TARGET.BODY);

router.get('/stats', wrapper(ctrl.getNotesStatistics));
router.get('/', wrapper(ctrl.getNotesListController));
router.post('/',wrapper(validationMiddleware), wrapper(ctrl.addNoteController));
router.get('/:id',wrapper(ctrl.getNoteController));
router.delete('/:id', wrapper(ctrl.removeNoteController));
router.patch('/:id', wrapper(ctrl.updateNoteController));

module.exports = router;