import pool from '../bin/server';
import createUrl from '../helpers/createUrl';
import datesTransform from '../helpers/datesTransform';

const getNote = async (urlHost: string, id: string) => {
    const result = await pool.query('SELECT * FROM notes WHERE id=$1', [id]);
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

export default getNote;