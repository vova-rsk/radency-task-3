import { Request, Response } from 'express';
import repositories from '../../repositories';

const getNotesList = async (req:Request, res:Response) => {
    const urlHost = String(req.headers.host);

    const result = await repositories.getNotesList(urlHost);
    
    res.status(200).json({
        status: 'success',
        code: 200,
        result
    });
};

export default getNotesList;