import { Request, Response } from 'express';
import repositories from '../../repositories';

const removeNote = async (req:Request, res:Response) => {
    const { id } = req.params;
    
    await repositories.removeNote(id);
    
    res.status(200).json({
        status: 'success',
        code: 200,
        message: 'removed successfull'
    });
};

export default removeNote;