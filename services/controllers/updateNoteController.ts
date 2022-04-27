import { Request, Response } from 'express';
import createError from 'http-errors';
import repositories from '../../repositories';
import { MESSAGES } from '../../helpers/constants';

const updateNote = async (req:Request, res:Response) => {
    const urlHost = String(req.headers.host);
    const { id } = req.params;
    const noteDataToUpdate = req.body;

    const result = await repositories.updateNote(urlHost, id, noteDataToUpdate);

    // if (!result) { 
    //     throw createError(404, MESSAGES.NOT_FOUND);
    // }

    res.status(200).json({
        status: 'success',
        code: 200,
        result
    });
};

export default updateNote;