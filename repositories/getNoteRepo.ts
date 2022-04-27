import { Note } from '../db';
import createUrl from '../helpers/createUrl';
import datesTransform from '../helpers/datesTransform';

const getNote = async (urlHost: string, id: string) => {
    const note = await Note.findByPk(id);

    if (!note) { 
        return null;
    }

    const updatedNote = {
        id: note.id,
        name:note.name,
        created: datesTransform(note.createdAt.toISOString()),
        category:note.category,
        content:note.content,
        dates: datesTransform(note.dates),
        iconUrl: createUrl(urlHost, note.icon),
        status:note.status
    }

    return updatedNote;
};

export default getNote;