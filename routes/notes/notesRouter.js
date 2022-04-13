const express = require('express');
const validation = require('../../middlewares/validation');
const wrapper = require('../../utils/wrapper');
const { REQ_VALIDATION_TARGET } = require('../../utils/constants');
const {
    addNoteController,
    updateNoteController,
    removeNoteController,
    getNoteController,
    getNotesListController,
    getNotesStatisticController
} = require('../../controllers');
const {
    addNoteDataSchema,
    noteIdSchema,
    updateNoteReqDataSchema
} = require('../../utils/validationSchemas');

// eslint-disable-next-line new-cap
const router = express.Router();

const addNoteBodyValidationMiddleware = validation(
    addNoteDataSchema, REQ_VALIDATION_TARGET.BODY
);
const paramsValidationMiddleware = validation(
    noteIdSchema, REQ_VALIDATION_TARGET.PARAMS
);
const updateNoteBodyValidationMiddleware = validation(
    updateNoteReqDataSchema, REQ_VALIDATION_TARGET.BODY
);

router.get('/stats', wrapper(getNotesStatisticController));

router.get('/', wrapper(getNotesListController));

router.post('/',
    wrapper(addNoteBodyValidationMiddleware),
    wrapper(addNoteController)
);

router.get('/:id',
    wrapper(paramsValidationMiddleware),
    wrapper(getNoteController)
);

router.delete('/:id',
    wrapper(paramsValidationMiddleware),
    wrapper(removeNoteController));

router.patch(
    '/:id',
    wrapper(paramsValidationMiddleware),
    wrapper(updateNoteBodyValidationMiddleware),
    wrapper(updateNoteController)
);

module.exports = router;