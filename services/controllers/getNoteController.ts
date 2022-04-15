import { Request, Response } from 'express';
import createError from 'http-errors';
import repositories from '../../repositories';
import { MESSAGES } from '../../helpers/constants';

const getNote = async (req:Request, res:Response) => {
    const urlHost = String(req.headers.host);
    const { id } = req.params;

    const result = await repositories.getNote(urlHost, id);

    if (!result) { 
        throw createError(404, MESSAGES.NOT_FOUND);
    }
    
    res.status(200).json({
        status: 'success',
        code: 200,
        result
    });
};

export default getNote;