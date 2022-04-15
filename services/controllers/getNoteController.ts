import { Request, Response } from 'express';
import repositories from '../../repositories';

const getNote = async (req:Request, res:Response) => {
    const urlHost = String(req.headers.host);
    const { id } = req.params;

    const result = await repositories.getNote(urlHost, id);
    
    res.status(200).json({
        status: 'success',
        code: 200,
        result
    });
};

export default getNote;