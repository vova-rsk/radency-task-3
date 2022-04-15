import Note from '../model';

const removeNote = async (id:string) => {
    return await Note.findOneAndRemove({ _id: id });
};

export default removeNote;