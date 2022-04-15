import Note from '../model';
import createUrl from '../helpers/createUrl';
import datesTransform from '../helpers/datesTransform';

const getNotesList = async (urlHost:string) => {
    const notesList = await Note
        .find()
        .select({ updatedAt: 0 });

    const updatedNotesList = notesList.map(note => { 
        return {
            id: note._id,
            name:note.name,
            created: datesTransform(note.createdAt),
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