import { Request, Response } from 'express';
import createError from 'http-errors';
import repositories from '../../repositories';
import { MESSAGES } from '../../helpers/constants';

const removeNote = async (req:Request, res:Response) => {
    const { id } = req.params;
    
    const result = await repositories.removeNote(id);

    if (!result) { 
        throw createError(404, MESSAGES.NOT_FOUND);
    }
    
    res.status(200).json({
        status: 'success',
        code: 200,
        message: 'removed successfull'
    });
};

export default removeNote;