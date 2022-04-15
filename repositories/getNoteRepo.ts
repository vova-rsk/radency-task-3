import Note from '../model';
import createUrl from '../helpers/createUrl';
import datesTransform from '../helpers/datesTransform';

const getNote = async (urlHost: string, id:string) => {
    const note = await Note
        .findOne({ _id: id })
        .select({ updatedAt: 0 });

    if (!note) { 
        return null;
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

export default getNote;