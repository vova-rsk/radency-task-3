import createError from 'http-errors';
import Note from '../model';
import { MESSAGES } from '../helpers/constants';

const removeNote = async (id:string) => {
    const result = await Note.findOneAndRemove({ _id: id });
    
    if (!result) { 
        throw createError(404, MESSAGES.NOT_FOUND);
    }
};

export default removeNote;