const express = require('express');
const { addNoteController, updateNoteController } = require('../../controllers');
const validation = require('../../middlewares/validation');
const wrapper = require('../../utils/wrapper');
const { REQ_VALIDATION_TARGET } = require('../../utils/constants');
const {
    addNoteDataSchema,
    noteIdSchema,
    updateNoteReqDataSchema
} = require('../../utils/validationSchemas');

// eslint-disable-next-line new-cap
const router = express.Router();
const addNoteBodyValidationMiddleware = validation(addNoteDataSchema, REQ_VALIDATION_TARGET.BODY);
const paramsValidationMiddleware = validation(noteIdSchema, REQ_VALIDATION_TARGET.PARAMS);
const updateNoteBodyValidationMiddleware = validation(updateNoteReqDataSchema, REQ_VALIDATION_TARGET.BODY);

// router.get('/stats', wrapper(ctrl.getNotesStatistics));

// router.get('/', wrapper(ctrl.getNotesListController));

router.post('/',
    wrapper(addNoteBodyValidationMiddleware),
    wrapper(addNoteController)
);

// router.get('/:id',wrapper(paramsValidationMiddleware), wrapper(ctrl.getNoteController));

// router.delete('/:id', wrapper(paramsValidationMiddleware), wrapper(ctrl.removeNoteController));

router.patch(
    '/:id',
    wrapper(paramsValidationMiddleware),
    wrapper(updateNoteBodyValidationMiddleware),
    wrapper(updateNoteController)
);

module.exports = router;