import createError from 'http-errors';
import Note from '../model';
import { MESSAGES } from '../helpers/constants';
import createUrl from '../helpers/createUrl';
import datesTransform from '../helpers/datesTransform';

interface INote { 
    name?: string;
    category?: string;
    content?: string;
    status?: string;
}

const updateNote = async (urlHost:string, id:string, noteData:INote) => {
    const note = await Note
        .findOneAndUpdate({ _id: id }, noteData, { new: true })
        .select({ updatedAt: 0 });
    
    if (!note) { 
        throw createError(404, MESSAGES.NOT_FOUND);
    }
    
    const updatedNote = {
        id: note._id,
        name:note.name,
        created: datesTransform(note.createdAt),
        category:note.category,
        content:note.content,
        dates:datesTransform(note.dates),
        iconUrl: createUrl(urlHost, note.icon),
        status:note.status
    }

    return updatedNote;
};

export default updateNote;