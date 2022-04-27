import { Note } from '../db';
import createUrl from '../helpers/createUrl';
import datesTransform from '../helpers/datesTransform';
import getIsoDateInterval from '../helpers/getDatesInterval';
import createIconPath from '../helpers/createIconPath';

interface INote { 
    name?: string;
    category?: string;
    content?: string;
    status?: 'active' | 'archived';
}

interface IUpdateData extends INote{
    id?: number;
    dates?: string[];
    icon?: string;
}

const updateNote = async (urlHost:string, id:string, noteData:INote) => {
    const dataToUpdate:IUpdateData = { ...noteData };
    const dates = noteData.content ? getIsoDateInterval(noteData.content) : null;
    const icon = noteData.category ? createIconPath(noteData.category) : null;
    
    if (dates) { 
        dataToUpdate.dates=dates;
    }

    if (icon) { 
        dataToUpdate.icon=icon;
    }

    const result = await Note.update(dataToUpdate, {
        where: { id },
        returning: true
    });

    const note = result[1][0];

    if (!note) { 
        return null;
    }
    
    const updatedNote = {
        id: note.id,
        name:note.name,
        created: datesTransform(note.createdAt.toISOString()),
        category:note.category,
        content:note.content,
        dates:datesTransform(note.dates),
        iconUrl: createUrl(urlHost, note.icon),
        status:note.status
    }

    return updatedNote;
};

export default updateNote;