import { Note } from '../db';
import createUrl from '../helpers/createUrl';
import datesTransform from '../helpers/datesTransform';

const getNotesList = async (urlHost: string) => {
    const notesList = await Note.findAll();
    
    if (!notesList) {
        return null;
    }

    const updatedNotesList = notesList.map(note => { 
        return {
            id: note.id,
            name:note.name,
            created: datesTransform(note.createdAt.toISOString()),
            category:note.category,
            content:note.content,
            dates:datesTransform(note.dates),
            iconUrl: createUrl(urlHost, note.icon),
            status:note.status
        };
    });

    return updatedNotesList;
};

export default getNotesList;