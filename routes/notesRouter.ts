import express from 'express';
import wrapper from '../helpers/wrapper';
import { controllers, middlewares } from '../services';

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/stats', wrapper(controllers.getNotesStatistic));

router.get('/', wrapper(controllers.getNotesList));

router.post('/',
    wrapper(middlewares.addNoteBodyValidation),
    wrapper(controllers.addNote)
);

router.get('/:id',
    wrapper(middlewares.paramsValidation),
    wrapper(controllers.getNote)
);

router.delete('/:id',
    wrapper(middlewares.paramsValidation),
    wrapper(controllers.removeNote)
);

router.patch(
    '/:id',
    wrapper(middlewares.paramsValidation),
    wrapper(middlewares.updateNoteBodyValidation),
    wrapper(controllers.updateNote)
);

export default router;