import Note from '../model';
import createUrl from '../helpers/createUrl';
import datesTransform from '../helpers/datesTransform';

interface INote { 
    name: string;
    category: string;
    content: string;
}

const addNote = async (urlHost:string, noteData:INote) => { 
    const { name, category, content } = noteData;

    const note = await Note.create({ name, category, content });

    const addedNote = {
        id: note._id,
        name:note.name,
        created: datesTransform(note.createdAt),
        category:note.category,
        content:note.content,
        dates:datesTransform(note.dates),
        iconUrl: createUrl(urlHost, note.icon),
        status:note.status
    }

    return addedNote;
};

export default addNote;