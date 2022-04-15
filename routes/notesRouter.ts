import express from 'express';
import wrapper from '../helpers/wrapper';
import { controllers, middlewares } from '../services';

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/stats', wrapper(controllers.getNotesStatistic));

router.get('/', wrapper(controllers.getNotesList));

router.post('/',
    middlewares.addNoteBodyValidation,
    wrapper(controllers.addNote)
);

router.get('/:id',
    middlewares.paramsValidation,
    wrapper(controllers.getNote)
);

router.delete('/:id',
    middlewares.paramsValidation,
    wrapper(controllers.removeNote)
);

router.patch(
    '/:id',
    middlewares.paramsValidation,
    middlewares.updateNoteBodyValidation,
    wrapper(controllers.updateNote)
);

export default router;