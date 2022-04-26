import db from '../bin/server';
import createUrl from '../helpers/createUrl';
import datesTransform from '../helpers/datesTransform';

const getNotesList = async (urlHost: string) => {
    const result = await db.query('SELECT * FROM notes');
    const notesList = result.rows;
    
    if (!notesList) {
        return null;
    }

    const updatedNotesList = notesList.map(note => { 
        return {
            id: note.id,
            name:note.name,
            created: datesTransform(note.created_at),
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