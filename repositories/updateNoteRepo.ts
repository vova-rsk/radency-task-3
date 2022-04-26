import db from '../bin/server';
import createUrl from '../helpers/createUrl';
import datesTransform from '../helpers/datesTransform';
import getIsoDateInterval from '../helpers/getDatesInterval';
import createIconPath from '../helpers/createIconPath';

interface INote { 
    name?: string;
    category?: string;
    content?: string;
    status?: string;
}

interface IUpdateData extends INote{ 
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

    const keysToUpdate = Object.keys(dataToUpdate);
    const valuesToUpdate = Object.values(dataToUpdate);
    
    const queryText = [
        'UPDATE notes',
        'SET ' + keysToUpdate.map((key, i) => `${key}=$${i + 1}`).join(','),
        `WHERE id=${id} RETURNING *`
    ].join(' ');

    const result = await db.query(queryText, valuesToUpdate);
    const note = result.rows[0];

    if (!note) { 
        return null;
    }
    
    const updatedNote = {
        id: note.id,
        name:note.name,
        created: datesTransform(note.created_at),
        category:note.category,
        content:note.content,
        dates:datesTransform(note.dates),
        iconUrl: createUrl(urlHost, note.icon),
        status:note.status
    }

    return updatedNote;
};

export default updateNote;