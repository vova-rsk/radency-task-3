import { Request, Response } from 'express';
import repositories from '../../repositories';

const updateNote = async (req:Request, res:Response) => {
    const urlHost = String(req.headers.host);
    const { id } = req.params;
    const noteDataToUpdate = req.body;

    const result = await repositories.updateNote(urlHost, id, noteDataToUpdate);

    res.status(200).json({
        status: 'success',
        code: 200,
        result
    });
};

export default updateNote;