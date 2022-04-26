import db from '../bin/server';
import createUrl from '../helpers/createUrl';
import datesTransform from '../helpers/datesTransform';
import getIsoDateInterval from '../helpers/getDatesInterval';
import createIconPath from '../helpers/createIconPath';

interface INote { 
    name: string;
    category: string;
    content: string;
}

const addNote = async (urlHost:string, noteData:INote) => { 
    const { name, category, content } = noteData;
    const dates = getIsoDateInterval(content);
    const icon = createIconPath(category);

    const query = {
        text: 'INSERT INTO notes (name, category, content, dates, icon) VALUES($1, $2, $3, $4, $5) RETURNING *',
        values: [name,category,content, dates, icon]
    };

    const result = await db.query(query);
    const note = result.rows[0];

    const addedNote = {
        id:note.id,
        name:note.name,
        created: datesTransform(note.created_at),
        category:note.category,
        content:note.content,
        dates:datesTransform(note.dates),
        iconUrl: createUrl(urlHost, note.icon),
        status:note.status
    }

    return addedNote;
};

export default addNote;