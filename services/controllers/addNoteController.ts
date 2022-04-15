import { Request, Response } from 'express';
import repositories from '../../repositories';

const addNote = async (req:Request, res:Response) => { 
    const urlHost = String(req.headers.host);

    const result = await repositories.addNote(urlHost, req.body);

    res.status(201).json({
        status: 'success',
        code: 201,
        result
    });
};

export default addNote;